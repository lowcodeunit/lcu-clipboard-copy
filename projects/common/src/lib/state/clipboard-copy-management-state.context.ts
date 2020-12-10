import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { ClipboardCopyManagementState } from './clipboard-copy-management.state';

@Injectable({
    providedIn: 'root'
})
export class ClipboardCopyManagementStateContext extends StateContext<ClipboardCopyManagementState> {

    // Constructors
    constructor(protected injector: Injector) {
        super(injector);
    }

    
    // API Methods
    public GetClipboardCopyById(id: number): void {
        this.Execute({
            Arguments: {
                ClipboardCopyId: id
            },
            Type: 'GetClipboardCopyById'
        });
    }

    //  Helpers
    protected defaultValue() {
        return { Loading: true } as ClipboardCopyManagementState;
    }
    
    protected loadStateKey(): string {
        return 'main';
    }

    protected loadStateName(): string {
        return 'clipboard-copy';
    }
}
