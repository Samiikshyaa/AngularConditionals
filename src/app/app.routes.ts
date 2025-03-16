import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { RandomComponent } from './random/random.component';
import { Random2Component } from './random2/random2.component';
export const routes: Routes = [
    {
        path: "",
        component: UserlistComponent
    },
    {
        path: "username", //"username/:userid" -> for dynamically
        component: UserdetailComponent,
        children:[
            {
            path:'skill',
            component: RandomComponent
            },
            {
                path:'skill',
                redirectTo: 'search'
            },
            {
            path:'education',
            component: Random2Component
            }
        ]
    },
    {
        path:"search",
        component: UsersearchComponent
    },{
        path:"*",
        redirectTo: '' //home ma redirect
    }
];
