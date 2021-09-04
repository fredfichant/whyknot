import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



//bouttons accueil
import { TablesComponent } from './boutons/accueil/tables/tables.component';
import { TutorielComponent } from './boutons/accueil/tutoriel/tutoriel.component';
import { PlastiqueComponent } from './boutons/accueil/plastique/plastique.component';
import { LexiqueComponent } from './boutons/accueil/lexique/lexique.component';
import { BoutoninvestigationsComponent } from './boutons/accueil/boutoninvestigations/boutoninvestigations.component';
import { OuvriereComponent } from './boutons/accueil/ouvriere/ouvriere.component';
//boutons jeuxreves
import { JeuxComponent } from './boutons/jeuxreves/jeux/jeux.component';
import { ReveComponent } from './boutons/jeuxreves/reve/reve.component';
import { ArtComponent } from './boutons/jeuxreves/boutonart/art.component';
import { RythmeComponent } from './boutons/jeuxreves/rythme/rythme.component';
import { EthiqueComponent } from './boutons/jeuxreves/ethique/ethique.component';
import { GratuiterieComponent } from './boutons/jeuxreves/gratuiterie/gratuiterie.component';
import { EspritComponent } from './boutons/jeuxreves/esprit/esprit.component';
//boutons glossaire
import { ButtonitalienComponent } from './boutons/glossaire/buttonitalien/buttonitalien.component';
import { ButtonespagnolComponent } from './boutons/glossaire/buttonespagnol/buttonespagnol.component';
import { ButtonarabeComponent } from './boutons/glossaire/buttonarabe/buttonarabe.component';
import { ButtonenglishComponent } from './boutons/glossaire/buttonenglish/buttonenglish.component';
import { ButtonrusseComponent } from './boutons/glossaire/buttonrusse/buttonrusse.component';
//boutons table
import { Table6Component } from './boutons/vuetables/table6/table6.component';
import { Table7Component } from './boutons/vuetables/table7/table7.component';
import { Table8Component } from './boutons/vuetables/table8/table8.component';
import { Table9Component } from './boutons/vuetables/table9/table9.component';
import { Table10Component } from './boutons/vuetables/table10/table10.component';
import { Table11Component } from './boutons/vuetables/table11/table11.component';
import { Table12Component } from './boutons/vuetables/table12/table12.component';
import { Table13Component } from './boutons/vuetables/table13/table13.component';
import { Table14Component } from './boutons/vuetables/table14/table14.component';
import { Table15Component } from './boutons/vuetables/table15/table15.component';

//boutons initiation
import { BoutonreductibiliteComponent } from './boutons/initiation/boutonreductibilite/boutonreductibilite.component';
import { BoutonnormalisationComponent } from './boutons/initiation/boutonnormalisation/boutonnormalisation.component';
import { BoutonportanceComponent } from './boutons/initiation/boutonportance/boutonportance.component';
import { BoutontournureComponent } from './boutons/initiation/boutontournure/boutontournure.component';

//boutons home
import { BoutonknotfuturComponent } from './boutons/home/boutonknotfutur/boutonknotfutur.component';
import { BoutonknotpastComponent } from './boutons/home/boutonknotpast/boutonknotpast.component';
import { BoutoninvitationComponent } from './boutons/home/boutoninvitation/boutoninvitation.component';

//pages d'accueil
import { AccueilLexiqueComponent } from './accueil/accueil-lexique/accueil-lexique.component';
import { AccueilTutoComponent } from './accueil/accueil-tuto/accueil-tuto.component';
import { AccueilTablesComponent } from './accueil/accueil-tables/accueil-tables.component';
import { AccueilPlastiqueComponent } from './accueil/accueil-plastique/accueil-plastique.component';
import { AccueilOuvriereComponent } from './accueil/accueil-ouvriere/accueil-ouvriere.component';
import { AccueilInvestigationsComponent } from './accueil/accueil-investigations/accueil-investigations.component';
import { HomeComponent } from './accueil/home/home.component';
//pages tables
import { VueTable6Component } from './vue-table/vue-table6/vue-table6.component';
import { VueTable7Component } from './vue-table/vue-table7/vue-table7.component';
import { VueTable8Component } from './vue-table/vue-table8/vue-table8.component';
import { VueTable9Component } from './vue-table/vue-table9/vue-table9.component';
import { VueTable10Component } from './vue-table/vue-table10/vue-table10.component';
import { VueTable11Component } from './vue-table/vue-table11/vue-table11.component';
import { VueTable12Component } from './vue-table/vue-table12/vue-table12.component';
import { VueTable13Component } from './vue-table/vue-table13/vue-table13.component';
import { VueTable14Component } from './vue-table/vue-table14/vue-table14.component';
import { VueTable15Component } from './vue-table/vue-table15/vue-table15.component';
//pages glossaire
import { GlossarabeComponent } from './glossaires/glossarabe/glossarabe.component';
import { GlossitalienComponent } from './glossaires/glossitalien/glossitalien.component';
import { GlossespagnolComponent } from './glossaires/glossespagnol/glossespagnol.component';
import { GlossenglishComponent } from './glossaires/glossenglish/glossenglish.component';
import { GlossrusseComponent } from './glossaires/glossrusse/glossrusse.component';
//pages initiation
import { PortanceComponent } from './initiation/portance/portance.component';
import { ReductibiliteComponent } from './initiation/reductibilite/reductibilite.component';
import { NormalisationComponent } from './initiation/normalisation/normalisation.component';
import { TournureComponent } from './initiation/tournure/tournure.component';
//page home
import { InvitationComponent } from './home/invitation/invitation.component';
import { KnotfuturComponent } from './home/knotfutur/knotfutur.component';
import { KnotpastComponent } from './home/knotpast/knotpast.component';

// boutons dessiner
import { BoutonamasComponent } from './boutons/dessiner/boutonamas/boutonamas.component';
import { BoutonrareteComponent } from './boutons/dessiner/boutonrarete/boutonrarete.component';
import { BoutonombreComponent } from './boutons/dessiner/boutonombre/boutonombre.component';
import { BoutongrapheComponent } from './boutons/dessiner/boutongraphe/boutongraphe.component';
import { BoutonmetamorphoseComponent } from './boutons/dessiner/boutonmetamorphose/boutonmetamorphose.component';
import { BoutonformuleComponent } from './boutons/dessiner/boutonformule/boutonformule.component';
import { BoutonmutationComponent } from './boutons/dessiner/boutonmutation/boutonmutation.component';

// pages dessiner
import { AmasComponent } from './dessiner/amas/amas.component';
import { RareteComponent } from './dessiner/rarete/rarete.component';
import { OmbreComponent } from './dessiner/ombre/ombre.component';
import { GrapheComponent } from './dessiner/graphe/graphe.component';
import { MetamorphoseComponent } from './dessiner/metamorphose/metamorphose.component';
import { FormuleComponent } from './dessiner/formule/formule.component';
import { MutationComponent } from './dessiner/mutation/mutation.component';
//pages investigation
import { TresseComponent } from './accueil/investigation/tresse/tresse.component';
import { CodeComponent } from './accueil/investigation/code/code.component';

//bouton investigation
import { BoutontresseComponent } from './boutons/investigation/boutontresse/boutontresse.component';
import { BoutoncodeComponent } from './boutons/investigation/boutoncode/boutoncode.component';
import { BoutonTransitionComponent } from './boutons/investigation/bouton-transition/bouton-transition.component';
import { TransitionComponent } from './accueil/investigation/transition/transition.component';

import { BoutonknotnowComponent } from './boutons/home/boutonknotnow/boutonknotnow.component';
import { KnotnowComponent } from './home/knotnow/knotnow.component';
import { BoutonCroisementComponent } from './boutons/investigation/bouton-croisement/bouton-croisement.component';
import { CroisementComponent } from './accueil/investigation/croisement/croisement.component';
import { BoutonautomateComponent } from './boutons/investigation/boutonautomate/boutonautomate.component';
import { AutomateComponent } from './accueil/investigation/automate/automate.component';
import { BoutonapeComponent } from './boutons/investigation/boutonape/boutonape.component';
import { ApeComponent } from './accueil/investigation/ape/ape.component';
import { BoutonspinComponent } from './boutons/investigation/boutonspin/boutonspin.component';
import { SpinComponent } from './accueil/investigation/spin/spin.component';
import { BoutontablesComponent } from './boutons/investigation/boutontables/boutontables.component';
import { TablenoComponent } from './accueil/investigation/tableno/tableno.component';
//formulaires

import { ProfileEditorComponent } from './formulaires/profileeditor/profileeditor.component';
import { BoutonformulaireComponent } from './boutons/boutonformulaire/boutonformulaire.component';
//ouvrière
import { ClitorneComponent } from './ouvriere/clitorne/clitorne.component';
import { BoutonclitorneComponent } from './boutons/ouvrière/boutonclitorne/boutonclitorne.component';
import { BoutonpsyComponent } from './boutons/boutonpsy/boutonpsy.component';
import { PsyComponent } from './ouvriere/psy/psy.component';
//constructions
import { BoutonsurfacesComponent } from './boutons/constructions/boutonsurfaces/boutonsurfaces.component';
import { SurfacesComponent } from './constructions/homotonies/surfaces/surfaces.component';
import { BoutonhomotoniesComponent } from './boutons/constructions/boutonhomotonies/boutonhomotonies.component';
import { HomotoniesComponent } from './constructions/homotonies/homotonies.component';

import { Animation1Component } from './animations/animation1/animation1.component';
import { Animation2Component } from './animations/animation2/animation2.component';
import { Animation3Component } from './animations/animation3/animation3.component';
import { Animation4Component } from './animations/animation4/animation4.component';
import { Animation5Component } from './animations/animation5/animation5.component';
import { Animation6Component } from './animations/animation6/animation6.component';
import { DoctrinesComponent } from './ouvriere/doctrines/doctrines.component';
import { BoutondoctrinesComponent } from './boutons/ouvrière/boutondoctrines/boutondoctrines.component';
import { Meta10Component } from './meta10/meta10.component';
import { Meta9Component } from './meta9/meta9.component';

import { SignupComponent } from './forms/auth/signup/signup.component';
import { SigninComponent } from './forms/auth/signin/signin.component';
import { KnotListComponent } from './forms/knot-list/knot-list.component';
import { SingleKnotComponent } from './forms/knot-list/single-knot/single-knot.component';
import { KnotFormComponent } from './forms/knot-list/knot-form/knot-form.component';
import { HeaderComponent } from './forms/header/header.component';
import { AuthService } from './services/auth.service';
import { KnotsService } from './services/knots.service';
import { AuthGuardService } from './services/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
   
    //bouttons accueil
    TablesComponent,
    TutorielComponent,
    PlastiqueComponent,
    LexiqueComponent,
    OuvriereComponent,
    BoutoninvestigationsComponent,
    //boutons inutilisés
    JeuxComponent,
    ReveComponent,
    ArtComponent,
    RythmeComponent,
    EthiqueComponent,
    EspritComponent,
    GratuiterieComponent,
    //boutons tables
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component,
    Table10Component,
    Table11Component,
    Table12Component,
    Table13Component,
    Table14Component,
    Table15Component,
    //boutons glossaire
    ButtonarabeComponent,
    ButtonitalienComponent,
    ButtonespagnolComponent,
    ButtonenglishComponent,
    ButtonrusseComponent,
    //boutons initiation
    BoutonportanceComponent,
    BoutonreductibiliteComponent,
    BoutonnormalisationComponent,
    BoutontournureComponent,
   // pages accueil
    AccueilTutoComponent,
    AccueilTablesComponent,
    AccueilPlastiqueComponent,
    AccueilOuvriereComponent,
    AccueilLexiqueComponent,
    AccueilInvestigationsComponent,
    // pages tables
    VueTable6Component,
    VueTable7Component,
    VueTable8Component,
    VueTable9Component,
    VueTable10Component,
    VueTable11Component,
    VueTable12Component,
    VueTable13Component,
    VueTable14Component,
    VueTable15Component,
    //page home
    HomeComponent,
    //pages glossaire
    GlossarabeComponent,
    GlossitalienComponent,
    GlossespagnolComponent,
    GlossenglishComponent,
    GlossrusseComponent,
    //pages initiation
    PortanceComponent,
    ReductibiliteComponent,
    NormalisationComponent,
    TournureComponent,
    //home
    BoutonknotfuturComponent,
    KnotfuturComponent,
    BoutonknotpastComponent,
    KnotpastComponent,
    KnotnowComponent,
    BoutonknotnowComponent,
    //dessiner
    BoutonamasComponent,
    AmasComponent,
    BoutonrareteComponent,
    RareteComponent,
    BoutonombreComponent,
    OmbreComponent,
    BoutongrapheComponent,
    GrapheComponent,
    BoutonmetamorphoseComponent,
    MetamorphoseComponent,
    FormuleComponent,
    BoutonformuleComponent,
    MutationComponent,
    BoutonmutationComponent,
    BoutoninvitationComponent,
    InvitationComponent,
      //investigation
    BoutontresseComponent,
    TresseComponent,
    BoutoncodeComponent,
    CodeComponent,
    BoutonCroisementComponent,
    TransitionComponent,
    CroisementComponent,
    BoutonTransitionComponent,
    BoutonautomateComponent,
    AutomateComponent,
    BoutonapeComponent,
    ApeComponent,
    BoutonspinComponent,
    SpinComponent,
    BoutontablesComponent,
    TablenoComponent,
      //formulaires
      ProfileEditorComponent,
    BoutonformulaireComponent,
    //constructions
    BoutonsurfacesComponent,
    SurfacesComponent,
    BoutonhomotoniesComponent,
    HomotoniesComponent,
    //ouvriere
    BoutonclitorneComponent,
    ClitorneComponent,
    BoutonpsyComponent,
    PsyComponent,
    DoctrinesComponent,
    BoutondoctrinesComponent,
   //animations
  Animation1Component,
        Animation2Component,
        Animation3Component,
        Animation4Component,
        Animation5Component,
        Animation6Component,
        Meta10Component,
        Meta9Component,
  //forms
         SignupComponent,
         SigninComponent,
         KnotListComponent,
         SingleKnotComponent,
         KnotFormComponent,
         HeaderComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    KatexModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ],

  providers: [AuthService, 
          KnotsService, 
            AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
