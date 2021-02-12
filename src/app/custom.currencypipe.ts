import { Pipe, PipeTransform } from "@angular/core";
import { formatCurrency, getCurrencySymbol } from "@angular/common";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import localeEs from "@angular/common/locales/es";
import localePt from "@angular/common/locales/pt";
import localeDe from "@angular/common/locales/de";
import localeSg from "@angular/common/locales/sg";
registerLocaleData(localePt);
registerLocaleData(localeEs);
registerLocaleData(localePt);
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeSg);

@Pipe({
  name: "mycurrency"
})
export class MycurrencyPipe implements PipeTransform {
  transform(
    value: number,
    currencyCode: string = "USD",
    display: "code" | "symbol" | "symbol-narrow" | string | boolean = "symbol",
    digitsInfo: string = "3.2-2",
    locale: string = "sg-CO"
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, "wide"),
      currencyCode,
      digitsInfo
    );
  }
}
