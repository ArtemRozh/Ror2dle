import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStateService } from '../../services/local-state.service';
import { ItemServiceService } from '../../services/item-service.service';
import { ItemSource } from '../../data/content/item.data';

@Component({
  selector: 'app-config',
  imports: [CommonModule, FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {
  options: string[] = ['default', 'null', 'scorched', 'siren', 'void'];
  currentTheme: string = 'default';
  itemSources = Object.values(ItemSource);

  constructor(
    private localState: LocalStateService,
    private itemService: ItemServiceService
  ) {}

  ngOnInit() {
    this.localState.loadState();
    this.currentTheme = this.localState.theme;
  }

  setTheme(option: string) {
    this.currentTheme = option;
    this.localState.theme = option;
    this.localState.applyAppearance();
  }

  getSource(source: string): boolean {
    return this.itemService.getSourceFilter(source);
  }

  setSource(source: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.itemService.setSourceFilter(source, checkbox.checked);
  }

  clearBanned() {
    this.itemService.clearAllBanned();
  }
}