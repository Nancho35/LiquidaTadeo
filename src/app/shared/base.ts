export class Base {

    constructor(
      // Form 1
      public salario?: number,
      public auxilio?: number,
      public horas_ex_diur?: number,
      public horas_ex_noc?: number,
      public recargos_noc?: number,
      public domi_ordinarios?: number,
      public horas_ex_domi_diur?: number,
      public horas_ex_domi_noc?: number,
      public otros?: number,
      public concepto_otros?: string,
      public sueldo_promedio?: number
          ) {
    }
  }
