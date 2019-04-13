export class Indemnizacion {

    constructor(
      // Form 1
      public indemniza_art65?: number,
      public indemniza_art64?: number,
      public ver_pro?: boolean,
      public check65?: boolean,
      public fecha_ini_pactada?: Date,
      public fecha_fin_pactada?: Date,
      public num_pro?: number,
      public fecha_ini_pro1?: Date,
      public fecha_ini_pro2?: Date,
      public fecha_ini_pro3?: Date,
      public fecha_ini_pro4?: Date,
      public fecha_fin_pro1?: Date,
      public fecha_fin_pro2?: Date,
      public fecha_fin_pro3?: Date,
      public fecha_fin_pro4?: Date
          ) {
    }
  }