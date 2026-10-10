import { Routes } from '@angular/router';
import { DailyComponent } from './pages/daily/daily.component';
import { EndlessComponent } from './pages/endless/endless.component';
import { ItemsComponent } from './pages/items/items.component';
import { ConfigComponent } from './pages/config/config.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "daily"},
    {path: "daily", component: DailyComponent},
    {path: "endless", component: EndlessComponent},
    {path: "items", component: ItemsComponent},
    {path: "config", component: ConfigComponent},
];