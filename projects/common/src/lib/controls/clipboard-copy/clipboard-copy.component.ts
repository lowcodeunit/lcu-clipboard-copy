import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClipboardCopyModel } from '../../models/clipboard-copy.model';

@Component({
  selector: 'lcu-clipboard-copy',
  templateUrl: './clipboard-copy.component.html',
  styleUrls: ['./clipboard-copy.component.scss']
})
export class ClipboardCopyComponent implements OnInit {

  @Input() public card: ClipboardCopyModel;

  @Output() public cardSelected: EventEmitter<any>;

  constructor() {
    this.cardSelected = new EventEmitter<any>();
  }

  public ngOnInit(): void { }

  public SelectCard(url?: string): void {
    this.cardSelected.emit();

    if (url) {
      window.open(url);
    }
  }

}
