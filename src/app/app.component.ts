import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//   <div class="app-main">
//     <h1>Mars Colony 1</h1>
//     <div>
//       <a routerLink="/register">Refister page</a>
//       <a routerLink="/encounters">Encounters page</a>
//       <a routerLink="/report">Report page</a>
//       <a routerLink="/notfound">NotFound page</a>
//     </div>
//     <p> Tap circle to enter </p>
//     <div class="page">
//       <router-outlet></router-outlet>
//     </div>
//   </div>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

// }
