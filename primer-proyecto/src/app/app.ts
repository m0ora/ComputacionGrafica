import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Content } from './content/content';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, Sidebar, Content, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primer-proyecto');
}
