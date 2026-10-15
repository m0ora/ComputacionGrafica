import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { Buscador } from '../buscador/buscador';

@Component({
  imports: [Logo, Buscador],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
