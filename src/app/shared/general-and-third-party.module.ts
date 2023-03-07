// 【一般及第三方匯入】
// 1.Angular Office===================================================
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// 2.PrimeNG===================================================
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';
import { AccordionModule } from 'primeng/accordion';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PickListModule } from 'primeng/picklist';
import { MegaMenuModule } from 'primeng/megamenu';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';
import { BlockUIModule } from 'primeng/blockui';
import { ChipsModule } from 'primeng/chips';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputMaskModule } from 'primeng/inputmask';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { PasswordModule } from 'primeng/password';
import { EditorModule } from 'primeng/editor';
import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';
import { AutoCompleteModule } from 'primeng/autocomplete';

// 3. D3.js===================================================
import { ChartsModule } from './charts/charts.module';


@NgModule({
  declarations: [],
  providers: [],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // D3.js
    ChartsModule,

    // PrimeNG
    TreeTableModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    StepsModule,
    AccordionModule,
    RatingModule,
    RadioButtonModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    InputNumberModule,
    SelectButtonModule,
    PickListModule,
    MegaMenuModule,
    CheckboxModule,
    PanelModule,
    PaginatorModule,
    BlockUIModule,
    ChipsModule,
    ProgressSpinnerModule,
    InputMaskModule,
    BreadcrumbModule,
    RippleModule,
    ButtonModule,
    TooltipModule,
    TreeModule,
    PasswordModule,
    EditorModule,
    BadgeModule,
    AutoCompleteModule,
    CarouselModule,
    TabViewModule,
  ],
  exports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // D3.js
    ChartsModule,

    // PrimeNG
    TreeTableModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    StepsModule,
    AccordionModule,
    RatingModule,
    RadioButtonModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    InputNumberModule,
    SelectButtonModule,
    PickListModule,
    MegaMenuModule,
    CheckboxModule,
    PanelModule,
    PaginatorModule,
    BlockUIModule,
    ChipsModule,
    ProgressSpinnerModule,
    InputMaskModule,
    BreadcrumbModule,
    RippleModule,
    ButtonModule,
    TooltipModule,
    TreeModule,
    PasswordModule,
    EditorModule,
    BadgeModule,
    AutoCompleteModule,
    CarouselModule,
    TabViewModule,
  ],
})
export class GeneralAndThirdPartyModule { }
