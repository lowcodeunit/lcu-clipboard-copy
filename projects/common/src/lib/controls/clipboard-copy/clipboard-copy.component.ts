import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lcu-clipboard-copy',
  templateUrl: './clipboard-copy.component.html',
  styleUrls: ['./clipboard-copy.component.scss']
})
export class ClipboardCopyComponent implements OnInit {

  @Input('content-to-copy')
  public ContentToCopy: any;

  public Icon: string;


  constructor() {

    this.Icon = 'content_copy';

  }

  public ngOnInit(): void { 
  }


  public Copy(val: string): void {
    const el = document.createElement('textarea');
    el.value = val;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.Icon = 'done'

    setTimeout(() => {
      this.Icon = 'content_copy'
    }, 3000);

  }

}
