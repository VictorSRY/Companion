import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { AllListComponent } from '../to-dolist/all-list/all-list.component';
import { CompleteComponent } from '../to-dolist/complete/complete.component';
import { EditItemComponent } from '../to-dolist/edit-item/edit-item.component';
import { ProgressingComponent } from '../to-dolist/progressing/progressing.component';
import { ToDolistComponent } from '../to-dolist/to-dolist.component';
import { TodayListComponent } from '../to-dolist/today-list/today-list.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:':userid',component:HomeComponent,children:[
        {path:'home',redirectTo:'/todo'},
        {path:'todo',component: ToDolistComponent,children:[
            {path:'',component:TodayListComponent,pathMatch:'full'},
            {path:'loadData',component:LoadingComponent},
            {path:'all-list',component:AllListComponent},
            {path:'progressing',component:ProgressingComponent},
            {path:'add',component:EditItemComponent},
            {path:'completed',component:CompleteComponent},
        ]},
    ]
}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRouting{}