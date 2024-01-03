import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard, AuthGuardForChild } from "./auth.guard";
import { canDeactivateServerEditGuard } from "./can-deactivate-server-edit.guard";

const appRoutes: Routes = [
	// don't use '/' in path property here or your routes won't work
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent },]},
	{ path: 'servers', component: ServersComponent,
      // canActivate: [AuthGuard],
      canActivateChild: [AuthGuardForChild], children: [
		{ path: ':id', component: ServerComponent },
		{ path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateServerEditGuard] },]
	},
	{ path: 'not-found', component: NotFoundComponent },
	// redirectTo follows the rules for usage of '/', '../' and '' related
	// to relative and absolute path routes
	{ path: '**', redirectTo: '/not-found' }
	// if you ever use redirectTo with path route '', see notes on pathMatch in Angular documentation
	// in this scenario it's better to use pathMatch: 'full' (default value is 'prefix')
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }