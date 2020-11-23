import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { UserMenuComponent } from './user-menu.component';

@NgModule({
    imports: [
        IonicModule.forRoot(),
        IonicStorageModule
    ],
    exports: [UserMenuComponent],
    declarations: [UserMenuComponent]
})
export class UserMenuComponentModule { }