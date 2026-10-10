import { Injectable } from '@angular/core';
import { ror2ItemData, ItemSource } from '../data/content/item.data';
import { LocalStateService } from './local-state.service';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  public items: any[] = ror2ItemData;

  constructor(private localState: LocalStateService) {
    this.localState.loadState();
    this.initializeDefaultSources();
  }

  private initializeDefaultSources() {
    const current = this.localState.sourceFilters;
    let updated = false;
    const defaults = Object.values(ItemSource);
    
    const newFilters = { ...current };
    for (const src of defaults) {
      if (newFilters[src] === undefined) {
        newFilters[src] = true;
        updated = true;
      }
    }
    if (updated) {
      this.localState.sourceFilters = newFilters;
    }
  }

  isBanned(name: string): boolean {
    return !!this.localState.bannedItemsMap[name];
  }

  toggleBan(name: string) {
    const map = { ...this.localState.bannedItemsMap };
    map[name] = !map[name];
    this.localState.bannedItemsMap = map;
  }

  clearAllBanned() {
    this.localState.bannedItemsMap = {};
  }

  getSourceFilter(source: string): boolean {
    const filters = this.localState.sourceFilters;
    return filters[source] ?? true;
  }

  setSourceFilter(source: string, val: boolean) {
    const filters = { ...this.localState.sourceFilters };
    filters[source] = val;
    this.localState.sourceFilters = filters;
  }

  getFilteredItems(searchQuery: string, filterState: string): any[] {
    return this.items.filter(item => {
      if (!this.getSourceFilter(item.source)) return false;
      if (filterState === 'available' && this.isBanned(item.name)) return false;
      if (filterState === 'banned' && !this.isBanned(item.name)) return false;
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }
}