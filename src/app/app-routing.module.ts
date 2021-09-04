import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//accueil
import { AccueilLexiqueComponent } from './accueil/accueil-lexique/accueil-lexique.component';
import { AccueilTutoComponent } from './accueil/accueil-tuto/accueil-tuto.component';
import { AccueilTablesComponent } from './accueil/accueil-tables/accueil-tables.component';
import { AccueilPlastiqueComponent } from './accueil/accueil-plastique/accueil-plastique.component';
import { AccueilOuvriereComponent } from './accueil/accueil-ouvriere/accueil-ouvriere.component';
import { HomeComponent } from './accueil/home/home.component';
import { AccueilInvestigationsComponent } from './accueil/accueil-investigations/accueil-investigations.component';
//tables
import { VueTable6Component } from './vue-table/vue-table6/vue-table6.component';
import { VueTable7Component } from './vue-table/vue-table7/vue-table7.component';
import { VueTable8Component } from './vue-table/vue-table8/vue-table8.component';
import { VueTable10Component } from './vue-table/vue-table10/vue-table10.component';
import { VueTable11Component } from './vue-table/vue-table11/vue-table11.component';
import { VueTable12Component } from './vue-table/vue-table12/vue-table12.component';
import { VueTable13Component } from './vue-table/vue-table13/vue-table13.component';
import { VueTable14Component } from './vue-table/vue-table14/vue-table14.component';
import { VueTable9Component } from './vue-table/vue-table9/vue-table9.component';
import { VueTable15Component } from './vue-table/vue-table15/vue-table15.component';
//glossaires
import {GlossarabeComponent } from  './glossaires/glossarabe/glossarabe.component';
import { GlossespagnolComponent } from './glossaires/glossespagnol/glossespagnol.component';
import { GlossitalienComponent } from './glossaires/glossitalien/glossitalien.component';
import { GlossenglishComponent } from './glossaires/glossenglish/glossenglish.component';
import { GlossrusseComponent } from './glossaires/glossrusse/glossrusse.component';
//initiation
import { PortanceComponent } from './initiation/portance/portance.component';
import { ReductibiliteComponent } from './initiation/reductibilite/reductibilite.component';
import { NormalisationComponent } from './initiation/normalisation/normalisation.component';
import { TournureComponent } from './initiation/tournure/tournure.component';
//home
import { KnotfuturComponent } from './home/knotfutur/knotfutur.component';
import { KnotpastComponent } from './home/knotpast/knotpast.component';
import { InvitationComponent } from './home/invitation/invitation.component';
//dessiner
import { AmasComponent } from './dessiner/amas/amas.component';
import { FormuleComponent } from './dessiner/formule/formule.component';
import { GrapheComponent } from './dessiner/graphe/graphe.component';
import { MetamorphoseComponent } from './dessiner/metamorphose/metamorphose.component';
import { OmbreComponent } from './dessiner/ombre/ombre.component';
import { RareteComponent } from './dessiner/rarete/rarete.component';
import { MutationComponent } from './dessiner/mutation/mutation.component';
//investigations
import { CodeComponent } from './accueil/investigation/code/code.component';
import { TresseComponent } from './accueil/investigation/tresse/tresse.component';
import { KnotnowComponent } from './home/knotnow/knotnow.component';
import { CroisementComponent } from './accueil/investigation/croisement/croisement.component';
import { TransitionComponent } from './accueil/investigation/transition/transition.component';
import { ApeComponent } from './accueil/investigation/ape/ape.component';
import { SpinComponent } from './accueil/investigation/spin/spin.component';
import { AutomateComponent } from './accueil/investigation/automate/automate.component';
import { TablenoComponent } from './accueil/investigation/tableno/tableno.component';
//formulaire
import { ProfileEditorComponent } from './formulaires/profileeditor/profileeditor.component';


import { ClitorneComponent } from './ouvriere/clitorne/clitorne.component';
import { SurfacesComponent } from './constructions/homotonies/surfaces/surfaces.component';
import { HomotoniesComponent } from './constructions/homotonies/homotonies.component';
import { PsyComponent } from './ouvriere/psy/psy.component';
import { DoctrinesComponent } from './ouvriere/doctrines/doctrines.component';

//forms

  import { SignupComponent } from './forms/auth/signup/signup.component';
import { SigninComponent } from './forms/auth/signin/signin.component';
import { KnotListComponent } from './forms/knot-list/knot-list.component';
import { KnotFormComponent } from './forms/knot-list/knot-form/knot-form.component';
import { SingleKnotComponent } from './forms/knot-list/single-knot/single-knot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

 
const routes: Routes = [
  { path: 'tutoriel', component: AccueilTutoComponent },
  { path: 'tables', component: AccueilTablesComponent},
  { path: 'plastique', component: AccueilPlastiqueComponent},
  { path: 'ouvriere', component: AccueilOuvriereComponent},
  { path: 'lexique', component: AccueilLexiqueComponent},
  { path: 'table6', component: VueTable6Component },
  { path: 'table7', component: VueTable7Component },
  { path: 'table8', component: VueTable8Component },
  { path: 'table9', component: VueTable9Component },
  { path: 'table10', component: VueTable10Component },
  { path: 'table11', component: VueTable11Component },
  { path: 'table12', component: VueTable12Component },
  { path: 'table13', component: VueTable13Component },
  { path: 'table14', component: VueTable14Component },
  { path: 'table15', component: VueTable15Component },
  { path: '', component: HomeComponent },
  { path: 'arabe', component: GlossarabeComponent },
  { path: 'espagnol', component: GlossespagnolComponent},
  { path: 'italien', component: GlossitalienComponent},
  { path: 'english', component: GlossenglishComponent},
  { path: 'russe', component: GlossrusseComponent},
  { path: 'portance', component: PortanceComponent},
  { path: 'reductibilite', component: ReductibiliteComponent},
  { path: 'normalisation', component: NormalisationComponent},
  { path: 'tournure', component: TournureComponent},
  { path: 'investigations', component: AccueilInvestigationsComponent},
  { path: 'knotfutur', component: KnotfuturComponent},
  { path: 'knotpast', component: KnotpastComponent},
  { path: 'amas', component: AmasComponent},
  { path: 'formule', component: FormuleComponent},
  { path: 'graphe', component: GrapheComponent},
  { path: 'metamorphose', component: MetamorphoseComponent},
  { path: 'ombre', component: OmbreComponent},
  { path: 'rarete', component: RareteComponent},
  { path: 'mutation', component: MutationComponent},
  { path: 'invitation', component: InvitationComponent},
  { path: 'code', component: CodeComponent},
  { path: 'tresse', component: TresseComponent},
  { path: 'knotnow', component: KnotnowComponent},
  { path: 'croisement', component: CroisementComponent},
  { path: 'transition', component: TransitionComponent},
  { path: 'ape', component: ApeComponent},
  { path: 'spin', component: SpinComponent},
  { path: 'automate', component: AutomateComponent},
  { path: 'tableno', component: TablenoComponent},
  { path: 'formulaire', component: ProfileEditorComponent},
  { path: 'clitorne', component: ClitorneComponent},
  { path: 'surfaces', component: SurfacesComponent },
  { path: 'homotonies', component: HomotoniesComponent},
  { path: 'psy', component: PsyComponent},
  { path: 'doctrines', component: DoctrinesComponent},

    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'knotlist', component: KnotListComponent },
    { path: 'knot/new', component: KnotFormComponent },
    { path: 'knots/view/:id', component: SingleKnotComponent }
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
