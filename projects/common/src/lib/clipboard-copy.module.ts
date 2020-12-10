import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { ClipboardCopyService } from './services/clipboard-copy.service';
import { ClipboardCopyComponent } from './controls/clipboard-copy/clipboard-copy.component';
import { ClipboardCopyDirective } from './directives/clipboard-copy.directive';

@NgModule({
  declarations: [ClipboardCopyComponent, ClipboardCopyDirective],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [ClipboardCopyComponent, ClipboardCopyDirective],
  entryComponents: []
})
export class ClipboardCopyModule {
  static forRoot(): ModuleWithProviders<ClipboardCopyModule> {
    return {
      ngModule: ClipboardCopyModule,
      providers: [ClipboardCopyService]
    };
  }
}
