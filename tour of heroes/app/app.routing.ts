import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes-component/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  	{
    	path: 'heroes',
    	component: HeroesComponent
  	},
  	{
  		path: 'dashboard',
  		component: DashboardComponent
	},
	{
		path:'',
		redirectTo:'/dashboard',
		pathMatch:'full'
	},
	{
  		path: 'detail/:id',
 		 component: HeroDetailComponent
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
