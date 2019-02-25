import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormComponent } from './projects/form/form.component';
import { ListComponent } from './projects/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'new-job',
        component: FormComponent
    }    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}