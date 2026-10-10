import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuesserService } from '../../services/guesser-service.ts.service';
import { ItemServiceService } from '../../services/item-service.service';

@Component({
  selector: 'app-endless',
  imports: [CommonModule, FormsModule],
  templateUrl: './endless.component.html',
  styleUrl: './endless.component.css'
})
export class EndlessComponent {
  searchQuery: string = '';
  isDropdownOpen: boolean = false;

  constructor(
    public guesser: GuesserService,
    private itemService: ItemServiceService
  ) {}

  get gameStarted() { return this.guesser.gameStarted; }
  get isWon() { return this.guesser.isWon; }
  get secretItem() { return this.guesser.secretItem; }
  get guesses() { return this.guesser.guesses; }

  get filteredItems() {
    if (!this.searchQuery) return [];
    const availableItems = this.itemService.items.filter(i => !this.itemService.isBanned(i.name));
    const guessedNames = this.guesses.map(g => g.item.name);
    return availableItems.filter(i => 
      i.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      !guessedNames.includes(i.name)
    );
  }

  startGame() {
    this.guesser.startNewGame();
    this.searchQuery = '';
  }

  selectItem(item: any) {
    this.guesser.makeGuess(item);
    this.searchQuery = '';
    this.isDropdownOpen = false;
  }

  getRarityClass(rarity: string): string {
    return `rarity-${rarity.toLowerCase()}`;
  }
}