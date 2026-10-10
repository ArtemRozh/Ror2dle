import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemServiceService } from '../../services/item-service.service';
import { LocalStateService } from '../../services/local-state.service';

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  searchQuery: string = '';
  filterState: string = 'all';

  constructor(
    private itemService: ItemServiceService,
    private localState: LocalStateService
  ) {
    this.localState.loadState();
  }

  get displayType(): number {
    return this.localState.displayType;
  }

  set displayType(val: number) {
    this.localState.displayType = val;
  }

  get items() {
    return this.itemService.getFilteredItems(this.searchQuery, this.filterState);
  }

  isBanned(name: string): boolean {
    return this.itemService.isBanned(name);
  }

  toggleItem(name: string) {
    this.itemService.toggleBan(name);
  }

  getRarityClass(rarity: string): string {
    return `rarity-${rarity.toLowerCase()}`;
  }

  toggleDisplayType() {
    this.displayType = this.displayType === 1 ? 2 : 1;
  }
}