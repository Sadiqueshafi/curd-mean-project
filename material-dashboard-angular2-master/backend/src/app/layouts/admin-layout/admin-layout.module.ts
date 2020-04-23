import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {PostCreateComponent} from '../../post/postCreate/post-create/post-create.component' 
import {MatCardModule} from '@angular/material/card';
import {PostListComponent } from '../../post/postCreate/post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostComponent } from '../../post/postCreate/post/post.component';
import {MatProgressSpinnerModule}from '@angular/material/progress-spinner'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    PostCreateComponent,
    UserProfileComponent,
    TableListComponent,
    PostComponent,
    TypographyComponent,
    IconsComponent,
    PostListComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
