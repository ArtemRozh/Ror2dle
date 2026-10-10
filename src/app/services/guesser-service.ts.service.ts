import { Injectable } from '@angular/core';
import { ItemServiceService } from './item-service.service';

export interface GuessResult {
  item: any;
  rarityMatch: boolean;
  sourceMatch: boolean;
  categoryMatchStatus: 'correct' | 'partial' | 'wrong';
  stackMatchStatus: 'correct' | 'partial' | 'wrong';
}

@Injectable({
  providedIn: 'root'
})
export class GuesserService {
  private _secretItem: any = null;
  private _guesses: GuessResult[] = [];
  private _gameStarted: boolean = false;
  private _isWon: boolean = false;
  private storageKey = 'guesserGameState';

  constructor(private itemService: ItemServiceService) {
    this.loadState();
  }

  get secretItem() { return this._secretItem; }
  get guesses() { return this._guesses; }
  get gameStarted() { return this._gameStarted; }
  get isWon() { return this._isWon; }

  startNewGame() {
    const available = this.itemService.items.filter(i => !this.itemService.isBanned(i.name));
    if (available.length === 0) return;
    this._secretItem = available[Math.floor(Math.random() * available.length)];
    this._guesses = [];
    this._gameStarted = true;
    this._isWon = false;
    this.saveState();
  }

  makeGuess(item: any): boolean {
    if (!this._gameStarted || this._isWon || !this._secretItem) return false;

    if (this._guesses.some(g => g.item.name === item.name)) return false;

    const rarityMatch = item.rarity === this._secretItem.rarity;
    const sourceMatch = item.source === this._secretItem.source;

    const secCats: string[] = this._secretItem.categories || [];
    const guessCats: string[] = item.categories || [];
    const matchedCats = guessCats.filter(c => secCats.includes(c));
    let categoryMatchStatus: 'correct' | 'partial' | 'wrong' = 'wrong';
    if (matchedCats.length === secCats.length && guessCats.length === secCats.length) {
      categoryMatchStatus = 'correct';
    } else if (matchedCats.length > 0) {
      categoryMatchStatus = 'partial';
    }

    const secStack: string[] = this._secretItem.stack || [];
    const guessStack: string[] = item.stack || [];
    const matchedStack = guessStack.filter(s => secStack.includes(s));
    let stackMatchStatus: 'correct' | 'partial' | 'wrong' = 'wrong';
    if (matchedStack.length === secStack.length && guessStack.length === secStack.length) {
      stackMatchStatus = 'correct';
    } else if (matchedStack.length > 0) {
      stackMatchStatus = 'partial';
    }

    const result: GuessResult = {
      item,
      rarityMatch,
      sourceMatch,
      categoryMatchStatus,
      stackMatchStatus
    };

    this._guesses.unshift(result);

    if (item.name === this._secretItem.name) {
      this._isWon = true;
    }

    this.saveState();
    return true;
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify({
        secretItem: this._secretItem,
        guesses: this._guesses,
        gameStarted: this._gameStarted,
        isWon: this._isWon
      }));
    } catch (e) {
      console.warn(e);
    }
  }

  loadState() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return;
      const data = JSON.parse(raw);
      this._secretItem = data.secretItem;
      this._guesses = data.guesses || [];
      this._gameStarted = data.gameStarted || false;
      this._isWon = data.isWon || false;
    } catch (e) {
      console.warn(e);
    }
  }
}