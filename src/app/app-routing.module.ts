import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultViewComponent } from "./result-view/result-view.component";
import { HomeComponent } from "./home/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "result", component: ResultViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
