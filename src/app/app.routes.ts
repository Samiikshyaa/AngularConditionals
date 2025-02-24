import { Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
export const routes: Routes = [
    {
        path: "",
        component: UserlistComponent
    },
    {
        path: "username",
        component: UserdetailComponent
    },
    {
        path:"search",
        component: UsersearchComponent
    }
];
