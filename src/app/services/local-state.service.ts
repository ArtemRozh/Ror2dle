import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStateService {
  private _theme: string = 'default';
  private _bannedItemsMap: Record<string, boolean> = {};
  private _displayType: number = 1;
  private _sourceFilters: Record<string, boolean> = {};
  private storageKey = 'localState';

  get theme() { return this._theme; }
  set theme(value: string) { this._theme = value; this.saveState(); }

  get bannedItemsMap() { return this._bannedItemsMap; }
  set bannedItemsMap(value: Record<string, boolean>) { this._bannedItemsMap = value; this.saveState(); }

  get displayType() { return this._displayType; }
  set displayType(value: number) { this._displayType = value; this.saveState(); }

  get sourceFilters() { return this._sourceFilters; }
  set sourceFilters(value: Record<string, boolean>) { this._sourceFilters = value; this.saveState(); }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.getState()));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  loadState() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return;

      const state = JSON.parse(raw);
      this._theme = state.theme || 'default';
      this._bannedItemsMap = state.bannedItemsMap || {};
      this._displayType = state.displayType ?? 1;
      this._sourceFilters = state.sourceFilters || {};
    } catch (e) {
      console.warn('Failed to load saved state:', e);
    }
  }

  getState() {
    return {
      theme: this._theme,
      bannedItemsMap: this._bannedItemsMap,
      displayType: this._displayType,
      sourceFilters: this._sourceFilters
    };
  }

  applyAppearance() {
    document.documentElement.setAttribute('data-theme', this._theme);
    document.documentElement.style.backgroundImage = `url('backgrounds/ror2_${this._theme}.jpeg')`;
  }
}