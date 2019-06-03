import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { DataService } from '../data.service';
import { Bienvenida } from '../shared/bienvenida';
import { NgbDateStruct, NgbDate, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 style="font-family: 'Montserrat', sans-serif;font-size: 30px;color: #002350">Terminos y condiciones</h4>

    </div>
    <div class="modal-body">
      <p>
      Conforme a lo reglado en la ley 1581 de 2012 y sus derechos reglamentario, autorizo de manera voluntaria, previa, explicita, informativa e inequívoca a la <strong>FUNDACION UNIVERSIDAD DE BOGOTA JORGE TADEO LOZANO</strong>y en particular a su <strong>CONSULTORIO JURIDICO Y CENTRO DE CONCILIACION</strong>, en adelante Universidad, para que registre, recolecte, procese , reporte, conserve, almacene , transfiera transmita, depure, use, analice, circule, suprima, cruce y consulte, o, en general le dé el tratamiento legal respectivo con ocasión d ellos fines propios de la consulta jurídica ante las distintas autoridades judiciales o administrativas o entidades públicas o privadas, cuando así lo quiera el trámite del respectivo caso además para fines académicos, estadísticos, de registro de control o comercial, crediticio, laboral o de cualquier otra naturaleza que haya suministrado y que sea incorporada en bases o banco de datos o en repositorios electrónicos de todo tipo con que cuenta la universidad y que fueren entregados con ocasión de los servicios funciones y competencias propias del consultorio jurídico universitario, y además servicios propios de la Universidad que permiten el cumplimento de sus funciones misionales y visiónales.
      De conformidad con la ley 1581 de 2012 y decretos reglamentarios, declaro que he sido informado de los siguiente: (i) Que la Universidad, como responsable del tratamiento de mis datos personales, ha puesto a mi disposición el correo electrónico <a href="mailto: protecciondatos@utadeo.edu.co ">protecciondatos@utadeo.edu.co </a>  y la directriz de tratamiento de datos personales en el sitio web <a href="https://www.utadeo.edu.co/es/link/descubre-la-universidad/2/documentos">https://www.utadeo.edu.co/es/link/descubre-la-universidad/2/documentos</a>  (ii) Aue los derechos que me asisten como titular de mis datos personales son los previstos en la constitución y la ley, especialmente el derecho a conocer, actualizar rectificar y suprimir su información personal, los cuales puedo ejercer a través de los canales dispuestos por la Universidad para la atención al público y observando la directriz de tratamiento de datos personales. (ii) Es voluntario responder preguntas eventualmente me sean hechas sobre datos sensibles.
      
      </p>
    </div>
    <div class="modal-footer">
      <button style=" background-color:#FDB43C;border: none;" type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Acepto</button>
      <button style=" background-color:#FDB43C;border: none;" type="button" class="btn btn-primary" (click)="cancelar()">Cancelar</button>

    </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
  cancelar(){
    location.reload();
  }
}


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent implements OnInit {
  // @Output('texto1') enviar = new EventEmitter<string>();
  contrato: string[];
  termina: string[];
  baseForm: FormGroup;
  submitted = false;
  model: Bienvenida;
  submittedModel: Bienvenida;
  markDisabled: (date: NgbDate) => boolean;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, public router: Router, private data: DataService,config: NgbDatepickerConfig) {
    this.baseForm = this.createMyForm();
    const currentDate = new Date();
    config.maxDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
    config.minDate = {year: 1930, month: 1, day: 1};
    config.outsideDays = 'hidden';
    config.dayTemplate
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }


  ngOnInit() {
    this.contrato = ['Término fijo', 'Término indefinido','Contrato de obra o labor'];
    this.termina = ['Con justa causa', 'Sin justa causa','Renuncia'];
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  createMyForm() {
    return this.formBuilder.group({
      fecha_ini: ['', Validators.compose([Validators.required])],
      fecha_fin: ['', Validators.compose([Validators.required])],
      cargo: ['', Validators.compose([Validators.pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), Validators.required])],
      contrato: ['', Validators.compose([Validators.required])],
      termina: ['', Validators.compose([Validators.required])]


    });
  }
  onSubmit({ value, valid }: { value: Bienvenida, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
    this.data.bienvenida = this.submittedModel;
    this.router.navigate(['base']);


  }

}
