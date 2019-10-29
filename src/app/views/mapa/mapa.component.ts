import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { MapaService } from '../../services/mapa.service';
import * as jquery from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;

  ////filtros////
  resultado: any;
  panelOpenState: boolean = false;
  public loading = false;
  public chk_1: any;
  public chk_2: any;
  public chk_3: any;
  public chk_4: any;
  public chk_5: any;
  public chk_6: any;
  public chk_7: any;
  public chk_8: any;
  public chk_9: any;
  public chk_10: any;
  public chk_11: any;
  public chk_12: any;
  public chk_13: any;
  public chk_14: any;
  public chk_15: any;
  public chk_16: any;
  public chk_17: any;
  public chk_18: any;
  public chk_19: any;
  public chk_20: any;
  public chk_21: any;
  public chk_22: any;
  public chk_23: any;
  public chk_24: any;
  public chk_25: any;
  public chk_26: any;
  public chk_27: any;
  public chk_28: any;
  public chk_29: any;
  public chk_30: any;
  public chk_31: any;
  public chk_32: any;
  public chk_33: any;
  public chk_34: any;
  public chk_35: any;
  public chk_36: any;
  public chk_37: any;
  public chk_38: any;
  public chk_39: any;
  public chk_40: any;
  public chk_41: any;
  public chk_42: any;
  public chk_43: any;
  public chk_44: any;
  public chk_45: any;
  public chk_46: any;
  public chk_47: any;
  public chk_48: any;
  public chk_49: any;
  public chk_50: any;
  public chk_51: any;
  public chk_52: any;
  public chk_53: any;
  public chk_54: any;
  public chk_55: any;
  public chk_56: any;
  public chk_57: any;
  public chk_58: any;
  public chk_59: any;
  public chk_60: any;
  public chk_61: any;
  public chk_62: any;
  public chk_63: any;
  public chk_64: any;
  public chk_65: any;
  public chk_66: any;
  public chk_67: any;
  public chk_68: any;
  public chk_69: any;
  public chk_70: any;
  public chk_71: any;
  public chk_72: any;
  public chk_73: any;
  public chk_74: any;
  public chk_75: any;
  public chk_76: any;
  public chk_77: any;
  public chk_78: any;
  public chk_79: any;
  public chk_80: any;
  public chk_81: any;
  public chk_82: any;
  public chk_83: any;
  public chk_84: any;
  public chk_85: any;
  public chk_86: any;
  public chk_87: any;
  public chk_88: any;
  public chk_89: any;
  public chk_90: any;
  public chk_91: any;
  public chk_92: any;
  public chk_93: any;
  public chk_94: any;
  public chk_95: any;
  public chk_96: any;
  public chk_97: any;
  public chk_98: any;
  public chk_99: any;
  public chk_100: any;
  public chk_101: any;
  public chk_102: any;
  public chk_103: any;
  public chk_104: any;
  public chk_105: any;
  public chk_106: any;
  public chk_107: any;
  public chk_108: any;
  public chk_109: any;
  public chk_110: any;
  public chk_111: any;
  public chk_112: any;
  public chk_113: any;
  public chk_114: any;
  public chk_115: any;
  public chk_116: any;
  public chk_117: any;
  public chk_118: any;
  public chk_119: any;
  public chk_120: any;
  public chk_121: any;
  public chk_122: any;
  public chk_123: any;
  public chk_124: any;
  public chk_125: any;
  public chk_126: any;
  public chk_127: any;
  public chk_128: any;
  public chk_129: any;
  public chk_130: any;
  public chk_131: any;
  public chk_132: any;
  public chk_133: any;
  public chk_134: any;
  public chk_135: any;
  public chk_136: any;
  public chk_137: any;
  public chk_138: any;
  public chk_139: any;
  public chk_140: any;
  public chk_141: any;
  public chk_142: any;
  public chk_143: any;
  public chk_144: any;
  public chk_145: any;
  public chk_146: any;
  public chk_147: any;
  public chk_148: any;
  public chk_149: any;
  public chk_150: any;
  public chk_151: any;
  public chk_152: any;
  public chk_153: any;
  public chk_154: any;
  public chk_155: any;
  public chk_156: any;
  public chk_157: any;
  public chk_158: any;
  public chk_159: any;
  public chk_160: any;
  public chk_161: any;
  public chk_162: any;
  public chk_163: any;
  public chk_164: any;
  public chk_165: any;
  public chk_166: any;
  public chk_167: any;
  public chk_168: any;
  public chk_169: any;
  public chk_170: any;
  public chk_171: any;
  public chk_172: any;
  public chk_173: any;
  public chk_174: any;
  public chk_175: any;
  public chk_176: any;
  public chk_177: any;
  public chk_178: any;
  public chk_179: any;
  public chk_180: any;
  public chk_181: any;
  public chk_182: any;
  public chk_183: any;
  public chk_184: any;
  public chk_185: any;
  public chk_186: any;
  public chk_187: any;
  public chk_188: any;
  public chk_189: any;
  public chk_190: any;
  public chk_191: any;
  public chk_192: any;
  public chk_193: any;
  public chk_194: any;
  public chk_195: any;
  public chk_196: any;
  public chk_197: any;
  public chk_198: any;
  public chk_199: any;
  public chk_200: any;
  public chk_201: any;
  public chk_202: any;
  public chk_203: any;
  public chk_204: any;
  public chk_205: any;
  public chk_206: any;
  public chk_207: any;
  public chk_208: any;
  public chk_209: any;
  public chk_210: any;
  public chk_211: any;
  public chk_212: any;
  public chk_213: any;
  public chk_214: any;
  public chk_215: any;
  public chk_216: any;
  public chk_217: any;
  public chk_218: any;
  public chk_219: any;
  public chk_220: any;
  public chk_221: any;
  public chk_222: any;
  public chk_223: any;
  public chk_224: any;
  public chk_225: any;
  public chk_226: any;
  public chk_227: any;
  public chk_228: any;
  public chk_229: any;
  public chk_230: any;
  public chk_231: any;
  public chk_232: any;
  public chk_233: any;
  public chk_234: any;
  public chk_235: any;
  public chk_236: any;
  public chk_237: any;
  public chk_238: any;
  public chk_239: any;
  public chk_240: any;
  public chk_241: any;
  public chk_242: any;
  public chk_243: any;
  public chk_244: any;
  public chk_245: any;
  public chk_246: any;
  public chk_247: any;
  public chk_248: any;
  public chk_249: any;
  public chk_250: any;
  public chk_251: any;
  public chk_252: any;
  public chk_253: any;
  public chk_254: any;
  public chk_255: any;
  public chk_256: any;
  public chk_257: any;
  public chk_258: any;
  public chk_259: any;
  public chk_260: any;
  public chk_261: any;
  public chk_262: any;
  public chk_263: any;
  public chk_264: any;
  public chk_265: any;
  public chk_266: any;
  public chk_267: any;
  public chk_268: any;
  public chk_269: any;
  public chk_270: any;
  public chk_271: any;
  public chk_272: any;
  public chk_273: any;
  public chk_274: any;
  public chk_275: any;
  public chk_276: any;
  public chk_277: any;
  public chk_278: any;
  public chk_279: any;
  public screenOptions;
  public chk_gas: any;
  public chk_fracturamiento: any;
  public chk_geofisicos: any;
  public chk_hundimiento: any;
  public chk_vul_fracturamiento: any;
  public chk_lomas: any;
  public chk_transicion: any;
  public chk_lacustre: any;
  public chk_vc: any;
  public chk_alcohol: any;
  public chk_comercio: any;
  public chk_per_riesgos: any;
  public chk_seguridad: any;
  public chk_genero: any;
  public chk_ries_colo: any;
  public chk_per: any;
  public chk_fen_per: any;
  public chk_vitales: any;
  public chk_infra: any;
  public chk_ries_in_publ: any;
  public chk_ries_unida: any;
  public chk_trab: any;
  public isTest: boolean = false;

  ///////////////
  mode = new FormControl('side');
  zoom: number = 12;

  // initial center position for the map19.431404, -99.095741
  latitud: number = 19.431404;
  longitud: number = -99.095741;
  //lat: number = 40.740;
  //lng: number = -74.18;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private service: MapaService, public dialog: MatDialog, ) { }

  mapClicked($event: MouseEvent) {
    //this.markers.push({
    //  latitud: $event.coords.lat,
    //  longitud: $event.coords.lng,
    //  draggable: true
    //});
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      id: 0,
      latitud: 0,
      longitud: 0,
      nombre: "",
      tipo: 0,
      type: 0,
      url: "",
      draggable: false
    }
  ]


  ngOnInit() {

  }

  ngAfterViewInit() {
    //this.service.service_general_get("mapa/tipo_filtro/2").subscribe(response => {
    //  console.log(response.result);
    //  this.markers = response.result;
    //});
  }

  filtros(event, obj, url) {
    console.log(event);
    this.loading = true;
    if (event.checked) {
      this.service.service_general_get("mapa/tipo_filtro/" + obj).subscribe(response => {
        console.log(response);

        if (obj > 2 && obj < 8) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 8) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreDelEstablecimiento,
              "actividad": response.result[i].nombreDeLaActividad,
              "direccion": response.result[i].nombreDelAsentamientoUbicacionDelInmueble,
              "no_personas": response.result[i].personasQueLoOcupan,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 8 && obj < 10) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 10) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreDelEstablecimiento,
              "actividad": response.result[i].nombreDeLaActividad,
              "direccion": response.result[i].nombreDelAsentamientoUbicacionDelInmueble,
              "no_personas": response.result[i].personasQueLoOcupan,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 10 && obj < 14) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 14) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreDelEstablecimiento,
              "actividad": response.result[i].nombreDeLaActividad,
              "direccion": response.result[i].nombreDelAsentamientoUbicacionDelInmueble,
              "no_personas": response.result[i].personasQueLoOcupan,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 15) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 16) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nomVE1,
              "actividad": response.result[i].nombreAct,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].perOcu,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 16 && obj < 33) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].razSocial == "" ? response.result[i].nomEstab : response.result[i].razSocial,
              "actividad": response.result[i].nombreAct,
              "direccion": response.result[i].nombAsent + ", " + response.result[i].numeroExt,
              "no_personas": response.result[i].perOcu,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 33) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].razSocial,
              "actividad": response.result[i].nombreAct,
              "direccion": response.result[i].nombAsent + ", " + response.result[i].numeroExt,
              "no_personas": response.result[i].perOcu,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 34) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].descripcion,
              "direccion": response.result[i].taxonomia,
              "no_personas": "0",
              "tipo": obj,
              "type": 2,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 35) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nomRefuT,
              "actividad": response.result[i].usoInmueble,
              "direccion": response.result[i].calleYNúmero + ", " + response.result[i].colonia,
              "no_personas": response.result[0].capacidad,
              "region": response.result[0].region,
              "fuente": response.result[0].fuente,
              "tipo": obj,
              "type": 3,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 35 && obj < 67) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nomEstab == "" ? response.result[i].razSocial : response.result[i].nomEstab,
              "actividad": response.result[i].nombreAct,
              "direccion": response.result[i].nomVE3 + ", " + response.result[i].nombAsent + ", " + response.result[i].numeroExt,
              "no_personas": response.result[i].perOcu,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 66 && obj < 69) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].fenomeno,
              "actividad": response.result[i].descripcion,
              "direccion": response.result[i].taxonomia,
              "region": response.result[i].rpve,
              "fuente": response.result[i].fuente,
              "no_personas": response.result[i].intensidad,
              "tipo": obj,
              "type": 4,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 69) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].fenómeno,
              "actividad": response.result[i].descripción,
              "direccion": "-",
              "region": response.result[i].rpve,
              "fuente": response.result[i].fuente,
              "no_personas": response.result[i].intensidad,
              "tipo": obj,
              "type": 4,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 73 && obj < 83) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].fenomeno,
              "actividad": response.result[i].descripcion,
              "direccion": response.result[i].taxonomia,
              "region": response.result[i].rpve,
              "fuente": response.result[i].fuente,
              "no_personas": response.result[i].intensidad,
              "tipo": obj,
              "type": 4,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 82 && obj < 94) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].alcaldía == null ? response.result[i].alcaldia : response.result[i].alcaldía,
              "actividad": response.result[i].usoDescripcion,
              "direccion": response.result[i].calle + " " + response.result[i].noExterno + ", " + response.result[i].colonia + ", " + response.result[i].codigoPostal,
              "no_personas": response.result[i].superficie,
              "tipo": obj,
              "type": 5,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 93 && obj < 98) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].empresa,
              "actividad": response.result[i].tipoDeResiduo,
              "direccion": response.result[i].dirección == null ? response.result[i].direccion : response.result[i].dirección,
              "no_personas": response.result[i].capacidadToneladas,
              "tipo": obj,
              "type": 6,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 97 && obj < 102) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 102) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreDelEstablecimiento,
              "actividad": response.result[i].nombreDeLaActividad,
              "direccion": response.result[i].nombreDelAsentamientoUbicacionDelInmueble,
              "no_personas": response.result[i].personasQueLoOcupan,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 102 && obj < 109) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 108) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreDelEstablecimiento,
              "actividad": response.result[i].nombreDeLaActividad,
              "direccion": response.result[i].nombreDelAsentamientoUbicacionDelInmueble,
              "no_personas": response.result[i].personasQueLoOcupan,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 109) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].actividad,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].noPersonas,
              "tipo": obj,
              "type": 1,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 110) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].fenomeno,
              "actividad": response.result[i].descripcion,
              "direccion": "-",
              "region": response.result[i].rpve,
              "fuente": response.result[i].fuente,
              "no_personas": response.result[i].intensidad,
              "tipo": obj,
              "type": 4,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 115 && obj < 157) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].delito == null ? response.result[i].nombre : response.result[i].delito,
              "actividad": response.result[i].categoriaDelito,
              "direccion": response.result[i].coloniaHechos,
              "no_personas": response.result[i].aoInicio,
              "region": response.result[i].aoInicio,
              "tipo": obj,
              "type": 7,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 156 && obj < 207) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].delito == null ? response.result[i].nombre : response.result[i].delito,
              "actividad": response.result[i].categoria == null ? response.result[i].categoriaDelito : response.result[i].categoria,
              "direccion": response.result[i].sexo,
              "no_personas": response.result[i].añoHecho == null ? response.result[i].añoHechos : response.result[i].añoHecho,
              "region": response.result[i].mesHecho,
              "fuente": response.result[i].coloniaHechos,
              "tipo": obj,
              "type": 8,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 206 && obj < 242) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombre,
              "actividad": response.result[i].clasConFAlarma,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].añoCierre,
              "region": response.result[i].tipoEntrada,
              "tipo": obj,
              "type": 9,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 242) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "LUNAS Servicio de asesoría a mujeres",
              "actividad": response.result[i].servicios,
              "direccion": response.result[i].direccion,
              "no_personas": response.result[i].telefono1,
              "region": response.result[i].correoElectronico,
              "tipo": obj,
              "type": 10,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 258) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Vulnerabilidad Socio administrativa",
              "actividad": response.result[i].nombreDeClaseDeLaActividad,
              "direccion": "",
              "no_personas": "",
              "region": "",
              "tipo": obj,
              "type": 11,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj > 258 && obj < 264) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].alcaldía,
              "actividad": response.result[i].tipoRiego,
              "direccion": response.result[i].direccion,
              "no_personas": "0",
              "region": response.result[i].territorial,
              "fuente": response.result[i].tipoFenomeno,
              "tipo": obj,
              "type": 11,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 264) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Características de la Unidad Habitacional",
              "actividad": response.result[i].colonia,
              "direccion": response.result[i].cuentanPersonalCapacitadoEmergenca,
              "no_personas": response.result[i].cuentanSeguroResponsabilidadCivil,
              "region": response.result[i].frecuenciaRealizanSimulacros,
              "fuente": response.result[i].numeroDeDepartamentosEdificios,
              "riesgo": response.result[i].tienenProtocoloActuacionEnCasaRiesgo,
              "tipo": obj,
              "type": 12,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 265) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].alcaldía,
              "actividad": response.result[i].tipoRiego,
              "direccion": response.result[i].direccion,
              "no_personas": "0",
              "region": response.result[i].territorial,
              "fuente": response.result[i].tipoFenomeno,
              "tipo": obj,
              "type": 11,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 266) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].granizadas,
              "direccion": response.result[i].inundaciones,
              "no_personas": response.result[i].inversionTermica,
              "region": response.result[i].lluviaTorrencial,
              "fuente": response.result[i].nevadas,
              "riesgo": response.result[i].escasesAgua,
              "riesgo_1": response.result[i].sequia,
              "tipo": obj,
              "type": 13,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 267) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].derrameHidrocarburos,
              "direccion": response.result[i].envenenamiento,
              "no_personas": response.result[i].epidemias,
              "region": response.result[i].fugasGas,
              "fuente": response.result[i].incendiosForestal,
              "riesgo": response.result[i].incendiosUrbano,
              "riesgo_1": response.result[i].intoxicaciones,
              "riesgo_3": response.result[i].radiacion,
              "tipo": obj,
              "type": 14,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 268) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].agrietamientoConstrucciones,
              "direccion": response.result[i].agrietamientoPisos,
              "no_personas": response.result[i].caidaCeniza,
              "region": response.result[i].deslizamientoSuelo,
              "fuente": response.result[i].flujosLodo,
              "riesgo": response.result[i].sismo,
              "riesgo_1": response.result[i].temblor,
              "riesgo_3": response.result[i].terremoto,
              "riesgo_4": response.result[i].vulcanismo,
              "tipo": obj,
              "type": 15,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 269) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].agrietamientoConstrucciones,
              "direccion": response.result[i].agrietamientoPisos,
              "no_personas": response.result[i].caidaCeniza,
              "region": response.result[i].deslizamientoSuelo,
              "fuente": response.result[i].flujosLodo,
              "riesgo": response.result[i].sismo,
              "riesgo_1": response.result[i].temblor,
              "riesgo_3": response.result[i].terremoto,
              "riesgo_4": response.result[i].vulcanismo,
              "tipo": obj,
              "type": 15,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 270) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].lugarEntrevista,
              "direccion": response.result[i].calleNumero + ", " + response.result[i].colonia + ", " + response.result[i].cp,
              "no_personas": "0",
              "tipo": obj,
              "type": 16,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 271) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreResponsableEstablecimiento,
              "riesgo_2": response.result[i].numCamasHabitacionesLocales,
              "direccion": response.result[i].numPersonasAtiendeDia,
              "no_personas": response.result[i].numPersonasTrabajanInmueble,
              "region": response.result[i].perfilPersonas,
              "fuente": response.result[i].tipoInmueble,
              "tipo": obj,
              "type": 17,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 272) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].agrietamientoConstrucciones,
              "direccion": response.result[i].agrietamientoPisos,
              "no_personas": response.result[i].caidaCeniza,
              "region": response.result[i].deslizamientoSuelo,
              "fuente": response.result[i].flujosLodo,
              "riesgo": response.result[i].sismo,
              "riesgo_1": response.result[i].temblor,
              "riesgo_3": response.result[i].terremoto,
              "riesgo_4": response.result[i].vulcanismo,
              "tipo": obj,
              "type": 15,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 273) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].granizadas,
              "direccion": response.result[i].inundaciones,
              "no_personas": response.result[i].inversionTermica,
              "region": response.result[i].lluviaTorrencial,
              "fuente": response.result[i].nevadas,
              "riesgo": response.result[i].escasesAgua,
              "riesgo_1": response.result[i].sequia,
              "tipo": obj,
              "type": 13,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 274) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].derrameHidrocarburos,
              "direccion": response.result[i].envenenamiento,
              "no_personas": response.result[i].epidemias,
              "region": response.result[i].fugasGas,
              "fuente": response.result[i].incendiosForestal,
              "riesgo": response.result[i].incendiosUrbano,
              "riesgo_1": response.result[i].intoxicaciones,
              "riesgo_3": response.result[i].radiacion,
              "tipo": obj,
              "type": 14,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 275) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "Riesgos Identificados",
              "riesgo_2": response.result[i].bardasMuyMalEstado,
              "direccion": response.result[i].contaminacionAgua,
              "no_personas": response.result[i].contaminacionAire,
              "region": response.result[i].contaminacionSuelo,
              "fuente": response.result[i].contaminacionVisual,
              "tipo": obj,
              "type": 18,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 276) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": response.result[i].nombreResponsableEstablecimiento,
              "riesgo_2": response.result[i].numCamasHabitacionesLocales,
              "direccion": response.result[i].numPersonasAtiendeDia,
              "no_personas": response.result[i].numPersonasTrabajanInmueble,
              "region": response.result[i].perfilPersonas,
              "fuente": response.result[i].tipoInmueble,
              "tipo": obj,
              "type": 17,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 277) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "¿Cuenta con personal capacitado?",
              "direccion": response.result[i].cuentaPersonalCapacitado,
              "no_personas": "0",
              "tipo": obj,
              "type": 19,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 278) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "¿Cuentan con seguro de responsabilidad civil?",
              "direccion": response.result[i].cuentanSeguroResponsabilidadCivil,
              "no_personas": "0",
              "tipo": obj,
              "type": 19,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }

        if (obj === 279) {
          for (var i = 0; i < response.result.length; i++) {
            this.markers.push({
              "id": response.result[i].id,
              "latitud": response.result[i].latitud,
              "longitud": response.result[i].longitud,
              "nombre": "¿Tiene protocolo de actuación en caso de riesgo?",
              "riesgo_14": response.result[i].alcantarilladoDanado,
              "riesgo_2": response.result[i].arbolesMuyGrandes,
              "direccion": response.result[i].bacheadoCondicionesDeplorables,
              "no_personas": response.result[i].bardasMalEstado,
              "region": response.result[i].callesAlumbradoInsuficiente,
              "fuente": response.result[i].callesCerradasCompleto,
              "riesgo": response.result[i].callesInvadidasGruposDelictivos,
              "riesgo_1": response.result[i].callesPesimoEstado,
              "riesgo_3": response.result[i].coladerasObstruidas,
              "riesgo_4": response.result[i].esquinasCalleMalEstado,
              "riesgo_5": response.result[i].mufa,
              "riesgo_6": response.result[i].negociosContribuyanContaminación,
              "riesgo_7": response.result[i].negociosRepresentenRiesgo,
              "riesgo_8": response.result[i].parquesAbandono,
              "riesgo_9": response.result[i].postesMalEstado,
              "riesgo_10": response.result[i].riesgoElectrico,
              "riesgo_11": response.result[i].socavn,
              "riesgo_12": response.result[i].terrenosBaldiosBasura,
              "riesgo_13": response.result[i].vialidadInterrumpidaRejas,
              "tipo": obj,
              "type": 20,
              "url": url,
              "draggable": false
            });
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }
        //console.log(this.markers);nombreDeClaseDeLaActividad
      })
    }
    else {
      this.markers = this.markers.filter(item => item.tipo !== obj);
      this.loading = false;
    }
  }

  public handleAddressChange(address) {
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.longitud = address.geometry.location.lng();
    this.latitud = address.geometry.location.lat();
    this.zoom = 15;
    this.markers.push({
      latitud: address.geometry.location.lat(),
      longitud: address.geometry.location.lng(),
      url: "assets/img/icon_maps/busqueda.png",
      nombre: "Busqueda",
      tipo: 0,
      type: 0,
      draggable: false
    });
  }

  clickedMarker(obj) {
    //console.log(obj.titulo);
    let dialogRef = this.dialog.open(DialogInfo, {
      width: '550px',
      disableClose: true,
      maxHeight: '90vh',
      data: { obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      //(result);
      if (result != undefined) {

      }
    });
  }

  Test() {
    this.isTest = true;
  }
}

@Component({
  selector: 'dialog-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-info.html',
  styleUrls: ['mapa.component.css']
})
export class DialogInfo {

  constructor(
    public dialogRef: MatDialogRef<DialogInfo>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// just an interface for type safety.
interface marker {
  id?: number;
  latitud: number;
  longitud: number;
  nombre?: string;
  actividad?: string;
  direccion?: string;
  no_personas?: string;
  region?: string;
  fuente?: string;
  riesgo?: string;
  riesgo_1?: string;
  riesgo_2?: string;
  riesgo_3?: string;
  riesgo_4?: string;
  riesgo_5?: string;
  riesgo_6?: string;
  riesgo_7?: string;
  riesgo_8?: string;
  riesgo_9?: string;
  riesgo_10?: string;
  riesgo_11?: string;
  riesgo_12?: string;
  riesgo_13?: string;
  riesgo_14?: string;
  tipo: number;
  type: number;
  url: string;
  draggable: boolean;
}


