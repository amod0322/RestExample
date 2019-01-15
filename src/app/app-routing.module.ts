import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'member',
  component : MemberComponent 
},
{
  path:'product',
  component:ProductComponent

},
{
  path:'list',
  component:ListComponent

},
{
  path:'addproduct',
  component:AddproductComponent
},
{
  path:'updateproduct',
  component:UpdateproductComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
