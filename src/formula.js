import * as formulajs from '@formulajs/formulajs'
export const formulas = {

    date: {
        desc: "Converts a provided year, month, and day into a date. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DATE.apply(null,argsArray).toString();
        },
        completion: "DATE("
    },

    datevalue: {
        desc: "Converts a provided date string in a known format to a date value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DATEVALUE.apply(null,argsArray).toString();
        },
        completion: "DATEVALUE("
    },

    day: {
        desc: "Returns the day of the month that a specific date falls on, in numeric format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DAY.apply(null,argsArray).toString();
        },
        completion: "DAY("
    },

    days: {
        desc: "Returns the number of days between two dates. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DAYS.apply(null,argsArray).toString();
        },
        completion: "DAYS("
    },

    days360: {
        desc: "Returns the difference between two days based on the 360 day year used in some financial interest calculations. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DAYS360.apply(null,argsArray).toString();
        },
        completion: "DAYS360("
    },

    edate: {
        desc: "Returns a date a specified number of months before or after another date. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EDATE.apply(null,argsArray).toString();
        },
        completion: "EDATE("
    },

    eomonth: {
        desc: "Returns a date representing the last day of a month which falls a specified number of months before or after another date. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EOMONTH.apply(null,argsArray).toString();
        },
        completion: "EOMONTH("
    },

    hour: {
        desc: "Returns the hour component of a specific time, in numeric format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.HOUR.apply(null,argsArray).toString();
        },
        completion: "HOUR("
    },

    minute: {
        desc: "Returns the minute component of a specific time, in numeric format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MINUTE.apply(null,argsArray).toString();
        },
        completion: "MINUTE("
    },

    isoweeknum: {
        desc: "Returns the number of the ISO week of the year where the provided date falls. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ISOWEEKNUM.apply(null,argsArray).toString();
        },
        completion: "ISOWEEKNUM("
    },

    month: {
        desc: "Returns the month of the year a specific date falls in, in numeric format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MONTH.apply(null,argsArray).toString();
        },
        completion: "MONTH("
    },

    networkdays: {
        desc: "Returns the number of net working days between two provided days. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NETWORKDAYS.apply(null,argsArray).toString();
        },
        completion: "NETWORKDAYS("
    },

    now: {
        desc: "Returns the current date and time as a date value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NOW.apply(null,argsArray).toString();
        },
        completion: "NOW("
    },

    second: {
        desc: "Returns the second component of a specific time, in numeric format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SECOND.apply(null,argsArray).toString();
        },
        completion: "SECOND("
    },

    time: {
        desc: "Converts a provided hour, minute, and second into a time. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TIME.apply(null,argsArray).toString();
        },
        completion: "TIME("
    },

    timevalue: {
        desc: "Returns the fraction of a 24-hour day the time represents. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TIMEVALUE.apply(null,argsArray).toString();
        },
        completion: "TIMEVALUE("
    },

    today: {
        desc: "Returns the current date as a date value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TODAY.apply(null,argsArray).toString();
        },
        completion: "TODAY("
    },

    weekday: {
        desc: "Returns a number representing the day of the week of the date provided. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.WEEKDAY.apply(null,argsArray).toString();
        },
        completion: "WEEKDAY("
    },

    year: {
        desc: "Returns the year specified by a given date. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.YEAR.apply(null,argsArray).toString();
        },
        completion: "YEAR("
    },

    weeknum: {
        desc: "Returns a number representing the week of the year where the provided date falls. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.WEEKNUM.apply(null,argsArray).toString();
        },
        completion: "WEEKNUM("
    },

    workday: {
        desc: "Calculates the end date after a specified number of working days. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.WORKDAY.apply(null,argsArray).toString();
        },
        completion: "WORKDAY("
    },

    yearfrac: {
        desc: "Returns the number of years, including fractional years, between two dates using a specified day count convention. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.YEARFRAC.apply(null,argsArray).toString();
        },
        completion: "YEARFRAC("
    },

    accrint: {
        desc: "Calculates the accrued interest of a security that has periodic payments. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ACCRINT.apply(null,argsArray).toString();
        },
        completion: "ACCRINT("
    },

    cumipmt: {
        desc: "Calculates the cumulative interest over a range of payment periods for an investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CUMIPMT.apply(null,argsArray).toString();
        },
        completion: "CUMIPMT("
    },

    cumprinc: {
        desc: "Calculates the cumulative principal paid over a range of payment periods for an investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CUMPRINC.apply(null,argsArray).toString();
        },
        completion: "CUMPRINC("
    },

    db: {
        desc: "Calculates the depreciation of an asset for a specified period using the arithmetic declining balance method. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DB.apply(null,argsArray).toString();
        },
        completion: "DB("
    },

    ddb: {
        desc: "Calculates the depreciation of an asset for a specified period using the double-declining balance method. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DDB.apply(null,argsArray).toString();
        },
        completion: "DDB("
    },

    dollarde: {
        desc: "Converts a price quotation given as a decimal fraction into a decimal value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DOLLARDE.apply(null,argsArray).toString();
        },
        completion: "DOLLARDE("
    },

    dollarfr: {
        desc: "Converts a price quotation given as a decimal value into a decimal fraction. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DOLLARFR.apply(null,argsArray).toString();
        },
        completion: "DOLLARFR("
    },

    effect: {
        desc: "Calculates the annual effective interest rate given the nominal rate and number of compounding periods per year. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EFFECT.apply(null,argsArray).toString();
        },
        completion: "EFFECT("
    },

    fv: {
        desc: "Calculates the future value of an annuity investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FV.apply(null,argsArray).toString();
        },
        completion: "FV("
    },

    fvschedule: {
        desc: "Calculates the future value of some principal based on a specified series of potentially varying interest rates. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FVSCHEDULE.apply(null,argsArray).toString();
        },
        completion: "FVSCHEDULE("
    },

    ipmt: {
        desc: "Calculates the payment on interest for an investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IPMT.apply(null,argsArray).toString();
        },
        completion: "IPMT("
    },

    irr: {
        desc: "Calculates the internal rate of return on an investment based on a series of periodic cash flows. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IRR.apply(null,argsArray).toString();
        },
        completion: "IRR("
    },

    ispmt: {
        desc: "The ISPMT function calculates the interest paid during a particular period of an investment. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ISPMT.apply(null,argsArray).toString();
        },
        completion: "ISPMT("
    },

    mirr: {
        desc: "Calculates the modified internal rate of return on an investment based on a series of periodic cash flows and the difference between the interest rate paid on financing versus the return received on reinvested income. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MIRR.apply(null,argsArray).toString();
        },
        completion: "MIRR("
    },

    nominal: {
        desc: "Calculates the annual nominal interest rate given the effective rate and number of compounding periods per year. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NOMINAL.apply(null,argsArray).toString();
        },
        completion: "NOMINAL("
    },

    nper: {
        desc: "Calculates the number of payment periods for an investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NPER.apply(null,argsArray).toString();
        },
        completion: "NPER("
    },

    npv: {
        desc: "Calculates the net present value of an investment based on a series of periodic cash flows and a discount rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NPV.apply(null,argsArray).toString();
        },
        completion: "NPV("
    },

    pduration: {
        desc: "Returns the number of periods for an investment to reach a specific value at a given rate. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PDURATION.apply(null,argsArray).toString();
        },
        completion: "PDURATION("
    },

    pmt: {
        desc: "Calculates the periodic payment for an annuity investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PMT.apply(null,argsArray).toString();
        },
        completion: "PMT("
    },

    ppmt: {
        desc: "Calculates the payment on the principal of an investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PPMT.apply(null,argsArray).toString();
        },
        completion: "PPMT("
    },

    pv: {
        desc: "Calculates the present value of an annuity investment based on constant-amount periodic payments and a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PV.apply(null,argsArray).toString();
        },
        completion: "PV("
    },

    rate: {
        desc: "Calculates the interest rate of an annuity investment based on constant-amount periodic payments and the assumption of a constant interest rate. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.RATE.apply(null,argsArray).toString();
        },
        completion: "RATE("
    },

    bin2dec: {
        desc: "Converts a signed binary number to decimal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BIN2DEC.apply(null,argsArray).toString();
        },
        completion: "BIN2DEC("
    },

    bin2hex: {
        desc: "Converts a signed binary number to signed hexadecimal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BIN2HEX.apply(null,argsArray).toString();
        },
        completion: "BIN2HEX("
    },

    bin2oct: {
        desc: "Converts a signed binary number to signed octal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BIN2OCT.apply(null,argsArray).toString();
        },
        completion: "BIN2OCT("
    },

    bitand: {
        desc: "Bitwise boolean AND of two numbers. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BITAND.apply(null,argsArray).toString();
        },
        completion: "BITAND("
    },

    bitlshift: {
        desc: "Shifts the bits of the input a certain number of places to the left. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BITLSHIFT.apply(null,argsArray).toString();
        },
        completion: "BITLSHIFT("
    },

    bitor: {
        desc: "Bitwise boolean OR of 2 numbers. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BITOR.apply(null,argsArray).toString();
        },
        completion: "BITOR("
    },

    bitrshift: {
        desc: "Shifts the bits of the input a certain number of places to the right. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BITRSHIFT.apply(null,argsArray).toString();
        },
        completion: "BITRSHIFT("
    },

    bitxor: {
        desc: "Bitwise XOR (exclusive OR) of 2 numbers. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BITXOR.apply(null,argsArray).toString();
        },
        completion: "BITXOR("
    },

    complex: {
        desc: "Creates a complex number given real and imaginary coefficients. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COMPLEX.apply(null,argsArray).toString();
        },
        completion: "COMPLEX("
    },

    convert: {
        desc: "Converts a numeric value to a different unit of measure. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CONVERT.apply(null,argsArray).toString();
        },
        completion: "CONVERT("
    },

    dec2bin: {
        desc: "Converts a decimal number to signed binary format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DEC2BIN.apply(null,argsArray).toString();
        },
        completion: "DEC2BIN("
    },

    dec2hex: {
        desc: "Converts a decimal number to signed hexadecimal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DEC2HEX.apply(null,argsArray).toString();
        },
        completion: "DEC2HEX("
    },

    dec2oct: {
        desc: "Converts a decimal number to signed octal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DEC2OCT.apply(null,argsArray).toString();
        },
        completion: "DEC2OCT("
    },

    delta: {
        desc: "Compare two numeric values, returning 1 if they\'re equal. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DELTA.apply(null,argsArray).toString();
        },
        completion: "DELTA("
    },

    erf: {
        desc: "The ERF function returns the integral of the Gauss error function over an interval of values. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ERF.apply(null,argsArray).toString();
        },
        completion: "ERF("
    },

    erfc: {
        desc: "Returns the complementary Gauss error function of a value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ERFC.apply(null,argsArray).toString();
        },
        completion: "ERFC("
    },

    gestep: {
        desc: "Returns 1 if the rate is strictly greater than or equal to the provided step value or 0 otherwise. If no step value is provided then the default value of 0 will be used. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GESTEP.apply(null,argsArray).toString();
        },
        completion: "GESTEP("
    },

    hex2bin: {
        desc: "Converts a signed hexadecimal number to signed binary format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.HEX2BIN.apply(null,argsArray).toString();
        },
        completion: "HEX2BIN("
    },

    hex2dec: {
        desc: "Converts a signed hexadecimal number to decimal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.HEX2DEC.apply(null,argsArray).toString();
        },
        completion: "HEX2DEC("
    },

    hex2oct: {
        desc: "Converts a signed hexadecimal number to signed octal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.HEX2OCT.apply(null,argsArray).toString();
        },
        completion: "HEX2OCT("
    },

    imabs: {
        desc: "Returns absolute value of a complex number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMABS.apply(null,argsArray).toString();
        },
        completion: "IMABS("
    },

    imaginary: {
        desc: "Returns the imaginary coefficient of a complex number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMAGINARY.apply(null,argsArray).toString();
        },
        completion: "IMAGINARY("
    },

    imargument: {
        desc: "The IMARGUMENT function returns the angle (also known as the argument or \theta) of the given complex number in radians. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMARGUMENT.apply(null,argsArray).toString();
        },
        completion: "IMARGUMENT("
    },

    imconjugate: {
        desc: "Returns the complex conjugate of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMCONJUGATE.apply(null,argsArray).toString();
        },
        completion: "IMCONJUGATE("
    },

    imcos: {
        desc: "The IMCOS function returns the cosine of the given complex number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMCOS.apply(null,argsArray).toString();
        },
        completion: "IMCOS("
    },

    imcosh: {
        desc: "Returns the hyperbolic cosine of the given complex number. For example, a given complex number \"x+yi\" returns \"cosh(x+yi).\" .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMCOSH.apply(null,argsArray).toString();
        },
        completion: "IMCOSH("
    },

    imcot: {
        desc: "Returns the cotangent of the given complex number. For example, a given complex number \"x+yi\" returns \"cot(x+yi).\" .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMCOT.apply(null,argsArray).toString();
        },
        completion: "IMCOT("
    },

    imcsc: {
        desc: "Returns the cosecant of the given complex number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMCSC.apply(null,argsArray).toString();
        },
        completion: "IMCSC("
    },

    imcsch: {
        desc: "Returns the hyperbolic cosecant of the given complex number. For example, a given complex number \"x+yi\" returns \"csch(x+yi).\" .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMCSCH.apply(null,argsArray).toString();
        },
        completion: "IMCSCH("
    },

    imdiv: {
        desc: "Returns one complex number divided by another. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMDIV.apply(null,argsArray).toString();
        },
        completion: "IMDIV("
    },

    imexp: {
        desc: "Returns Euler\'s number, e (~2.718) raised to a complex power. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMEXP.apply(null,argsArray).toString();
        },
        completion: "IMEXP("
    },

    imln: {
        desc: "Returns the logarithm of a complex number, base e (Euler\'s number). ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMLN.apply(null,argsArray).toString();
        },
        completion: "IMLN("
    },

    imlog10: {
        desc: "Returns the logarithm of a complex number with base 10. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMLOG10.apply(null,argsArray).toString();
        },
        completion: "IMLOG10("
    },

    imlog2: {
        desc: "Returns the logarithm of a complex number with base 2. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMLOG2.apply(null,argsArray).toString();
        },
        completion: "IMLOG2("
    },

    impower: {
        desc: "Returns a complex number raised to a power. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMPOWER.apply(null,argsArray).toString();
        },
        completion: "IMPOWER("
    },

    improduct: {
        desc: "Returns the result of multiplying a series of complex numbers together. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMPRODUCT.apply(null,argsArray).toString();
        },
        completion: "IMPRODUCT("
    },

    imreal: {
        desc: "Returns the real coefficient of a complex number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMREAL.apply(null,argsArray).toString();
        },
        completion: "IMREAL("
    },

    imsec: {
        desc: "Returns the secant of the given complex number. For example, a given complex number \"x+yi\" returns \"sec(x+yi).\" .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSEC.apply(null,argsArray).toString();
        },
        completion: "IMSEC("
    },

    imsech: {
        desc: "Returns the hyperbolic secant of the given complex number. For example, a given complex number \"x+yi\" returns \"sech(x+yi).\" .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSECH.apply(null,argsArray).toString();
        },
        completion: "IMSECH("
    },

    imsin: {
        desc: "Returns the sine of the given complex number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSIN.apply(null,argsArray).toString();
        },
        completion: "IMSIN("
    },

    imsinh: {
        desc: "Returns the hyperbolic sine of the given complex number. For example, a given complex number \"x+yi\" returns \"sinh(x+yi).\" .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSINH.apply(null,argsArray).toString();
        },
        completion: "IMSINH("
    },

    imsqrt: {
        desc: "Computes the square root of a complex number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSQRT.apply(null,argsArray).toString();
        },
        completion: "IMSQRT("
    },

    imsub: {
        desc: "Returns the difference between two complex numbers. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSUB.apply(null,argsArray).toString();
        },
        completion: "IMSUB("
    },

    imsum: {
        desc: "Returns the sum of a series of complex numbers. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMSUM.apply(null,argsArray).toString();
        },
        completion: "IMSUM("
    },

    imtan: {
        desc: "Returns the tangent of the given complex number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IMTAN.apply(null,argsArray).toString();
        },
        completion: "IMTAN("
    },

    oct2bin: {
        desc: "Converts a signed octal number to signed binary format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.OCT2BIN.apply(null,argsArray).toString();
        },
        completion: "OCT2BIN("
    },

    oct2dec: {
        desc: "Converts a signed octal number to decimal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.OCT2DEC.apply(null,argsArray).toString();
        },
        completion: "OCT2DEC("
    },

    oct2hex: {
        desc: "Converts a signed octal number to signed hexadecimal format. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.OCT2HEX.apply(null,argsArray).toString();
        },
        completion: "OCT2HEX("
    },

    and: {
        desc: "Returns true if all of the provided arguments are logically true, and false if any of the provided arguments are logically false. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.AND.apply(null,argsArray).toString();
        },
        completion: "AND("
    },

    if: {
        desc: "Returns one value if a logical expression is `TRUE` and another if it is `FALSE`. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IF.apply(null,argsArray).toString();
        },
        completion: "IF("
    },

    ifs: {
        desc: "Evaluates multiple conditions and returns a value that corresponds to the first true condition. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IFS.apply(null,argsArray).toString();
        },
        completion: "IFS("
    },

    iferror: {
        desc: "Returns the first argument if it is not an error value, otherwise returns the second argument if present, or a blank if the second argument is absent. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IFERROR.apply(null,argsArray).toString();
        },
        completion: "IFERROR("
    },

    ifna: {
        desc: "Evaluates a value. If the value is an #N/A error, returns the specified value. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.IFNA.apply(null,argsArray).toString();
        },
        completion: "IFNA("
    },

    not: {
        desc: "Returns the opposite of a logical value - `NOT(TRUE)` returns `FALSE`; `NOT(FALSE)` returns `TRUE`. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NOT.apply(null,argsArray).toString();
        },
        completion: "NOT("
    },

    or: {
        desc: "Returns true if any of the provided arguments are logically true, and false if all of the provided arguments are logically false. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.OR.apply(null,argsArray).toString();
        },
        completion: "OR("
    },

    switch: {
        desc: "Tests an expression against a list of cases and returns the corresponding value of the first matching case, with an optional default value if nothing else is met. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SWITCH.apply(null,argsArray).toString();
        },
        completion: "SWITCH("
    },

    xor: {
        desc: "The XOR function performs an exclusive or of 2 numbers that returns a 1 if the numbers are different, and a 0 otherwise. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.XOR.apply(null,argsArray).toString();
        },
        completion: "XOR("
    },

    abs: {
        desc: "Returns the absolute value of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ABS.apply(null,argsArray).toString();
        },
        completion: "ABS("
    },

    acos: {
        desc: "Returns the inverse cosine of a value, in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ACOS.apply(null,argsArray).toString();
        },
        completion: "ACOS("
    },

    acosh: {
        desc: "Returns the inverse hyperbolic cosine of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ACOSH.apply(null,argsArray).toString();
        },
        completion: "ACOSH("
    },

    acot: {
        desc: "Returns the inverse cotangent of a value, in radians. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ACOT.apply(null,argsArray).toString();
        },
        completion: "ACOT("
    },

    acoth: {
        desc: "Returns the inverse hyperbolic cotangent of a value, in radians. Must not be between -1 and 1, inclusive. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ACOTH.apply(null,argsArray).toString();
        },
        completion: "ACOTH("
    },

    arabic: {
        desc: "Computes the value of a Roman numeral. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ARABIC.apply(null,argsArray).toString();
        },
        completion: "ARABIC("
    },

    asin: {
        desc: "Returns the inverse sine of a value, in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ASIN.apply(null,argsArray).toString();
        },
        completion: "ASIN("
    },

    asinh: {
        desc: "Returns the inverse hyperbolic sine of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ASINH.apply(null,argsArray).toString();
        },
        completion: "ASINH("
    },

    atan: {
        desc: "Returns the inverse tangent of a value, in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ATAN.apply(null,argsArray).toString();
        },
        completion: "ATAN("
    },

    atan2: {
        desc: "Returns the angle between the x-axis and a line segment from the origin (0,0) to specified coordinate pair (`x`,`y`), in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ATAN2.apply(null,argsArray).toString();
        },
        completion: "ATAN2("
    },

    atanh: {
        desc: "Returns the inverse hyperbolic tangent of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ATANH.apply(null,argsArray).toString();
        },
        completion: "ATANH("
    },

    base: {
        desc: "Converts a number into a text representation in another base, for example, base 2 for binary. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BASE.apply(null,argsArray).toString();
        },
        completion: "BASE("
    },

    ceiling: {
        desc: "Rounds a number up to the nearest integer multiple of specified significance. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CEILING.apply(null,argsArray).toString();
        },
        completion: "CEILING("
    },

    combin: {
        desc: "Returns the number of ways to choose some number of objects from a pool of a given size of objects. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COMBIN.apply(null,argsArray).toString();
        },
        completion: "COMBIN("
    },

    combina: {
        desc: "Returns the number of ways to choose some number of objects from a pool of a given size of objects, including ways that choose the same object multiple times. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COMBINA.apply(null,argsArray).toString();
        },
        completion: "COMBINA("
    },

    cos: {
        desc: "Returns the cosine of an angle provided in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COS.apply(null,argsArray).toString();
        },
        completion: "COS("
    },

    cosh: {
        desc: "Returns the hyperbolic cosine of any real number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COSH.apply(null,argsArray).toString();
        },
        completion: "COSH("
    },

    cot: {
        desc: "Cotangent of an angle provided in radians. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COT.apply(null,argsArray).toString();
        },
        completion: "COT("
    },

    coth: {
        desc: "Returns the hyperbolic cotangent of any real number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COTH.apply(null,argsArray).toString();
        },
        completion: "COTH("
    },

    csc: {
        desc: "Returns the cosecant of an angle provided in radians. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CSC.apply(null,argsArray).toString();
        },
        completion: "CSC("
    },

    csch: {
        desc: "The CSCH function returns the hyperbolic cosecant of any real number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CSCH.apply(null,argsArray).toString();
        },
        completion: "CSCH("
    },

    decimal: {
        desc: "The DECIMAL function converts the text representation of a number in another base, to base 10 (decimal). .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DECIMAL.apply(null,argsArray).toString();
        },
        completion: "DECIMAL("
    },

    erf: {
        desc: "The ERF function returns the integral of the Gauss error function over an interval of values. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ERF.apply(null,argsArray).toString();
        },
        completion: "ERF("
    },

    erfc: {
        desc: "Returns the complementary Gauss error function of a value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ERFC.apply(null,argsArray).toString();
        },
        completion: "ERFC("
    },

    even: {
        desc: "Rounds a number up to the nearest even integer. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EVEN.apply(null,argsArray).toString();
        },
        completion: "EVEN("
    },

    exp: {
        desc: "Returns Euler\'s number, e (~2.718) raised to a power. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EXP.apply(null,argsArray).toString();
        },
        completion: "EXP("
    },

    fact: {
        desc: "Returns the factorial of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FACT.apply(null,argsArray).toString();
        },
        completion: "FACT("
    },

    factdouble: {
        desc: "Returns the \"double factorial\" of a number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FACTDOUBLE.apply(null,argsArray).toString();
        },
        completion: "FACTDOUBLE("
    },

    floor: {
        desc: "Rounds a number down to the nearest integer multiple of specified significance. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FLOOR.apply(null,argsArray).toString();
        },
        completion: "FLOOR("
    },

    gcd: {
        desc: "Returns the greatest common divisor of one or more integers. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GCD.apply(null,argsArray).toString();
        },
        completion: "GCD("
    },

    int: {
        desc: "Rounds a number down to the nearest integer that is less than or equal to it. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.INT.apply(null,argsArray).toString();
        },
        completion: "INT("
    },

    iseven: {
        desc: "Checks whether the provided value is even. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ISEVEN.apply(null,argsArray).toString();
        },
        completion: "ISEVEN("
    },

    isodd: {
        desc: "Checks whether the provided value is odd. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ISODD.apply(null,argsArray).toString();
        },
        completion: "ISODD("
    },

    lcm: {
        desc: "Returns the least common multiple of one or more integers. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LCM.apply(null,argsArray).toString();
        },
        completion: "LCM("
    },

    ln: {
        desc: "Returns the the logarithm of a number, base e (Euler\'s number). ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LN.apply(null,argsArray).toString();
        },
        completion: "LN("
    },

    log: {
        desc: "Returns the the logarithm of a number given a base. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LOG.apply(null,argsArray).toString();
        },
        completion: "LOG("
    },

    log10: {
        desc: "Returns the the logarithm of a number, base 10. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LOG10.apply(null,argsArray).toString();
        },
        completion: "LOG10("
    },

    mod: {
        desc: "Returns the result of the modulo operator, the remainder after a division operation. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MOD.apply(null,argsArray).toString();
        },
        completion: "MOD("
    },

    mround: {
        desc: "Rounds one number to the nearest integer multiple of another. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MROUND.apply(null,argsArray).toString();
        },
        completion: "MROUND("
    },

    multinomial: {
        desc: "Returns the factorial of the sum of values divided by the product of the values\' factorials. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MULTINOMIAL.apply(null,argsArray).toString();
        },
        completion: "MULTINOMIAL("
    },

    odd: {
        desc: "Rounds a number up to the nearest odd integer. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ODD.apply(null,argsArray).toString();
        },
        completion: "ODD("
    },

    power: {
        desc: "Returns a number raised to a power. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.POWER.apply(null,argsArray).toString();
        },
        completion: "POWER("
    },

    product: {
        desc: "Returns the result of multiplying a series of numbers together. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PRODUCT.apply(null,argsArray).toString();
        },
        completion: "PRODUCT("
    },

    quotient: {
        desc: "Returns one number divided by another. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.QUOTIENT.apply(null,argsArray).toString();
        },
        completion: "QUOTIENT("
    },

    radians: {
        desc: "Converts an angle value in degrees to radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.RADIANS.apply(null,argsArray).toString();
        },
        completion: "RADIANS("
    },

    rand: {
        desc: "Returns a random number between 0 inclusive and 1 exclusive. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.RAND.apply(null,argsArray).toString();
        },
        completion: "RAND("
    },

    randbetween: {
        desc: "Returns a uniformly random integer between two values, inclusive. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.RANDBETWEEN.apply(null,argsArray).toString();
        },
        completion: "RANDBETWEEN("
    },

    round: {
        desc: "Rounds a number to a certain number of decimal places according to standard rules. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ROUND.apply(null,argsArray).toString();
        },
        completion: "ROUND("
    },

    rounddown: {
        desc: "Rounds a number to a certain number of decimal places, always rounding down to the next valid increment. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ROUNDDOWN.apply(null,argsArray).toString();
        },
        completion: "ROUNDDOWN("
    },

    roundup: {
        desc: "Rounds a number to a certain number of decimal places, always rounding up to the next valid increment. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ROUNDUP.apply(null,argsArray).toString();
        },
        completion: "ROUNDUP("
    },

    sec: {
        desc: "The SEC function returns the secant of an angle, measured in radians. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SEC.apply(null,argsArray).toString();
        },
        completion: "SEC("
    },

    sech: {
        desc: "The SECH function returns the hyperbolic secant of an angle. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SECH.apply(null,argsArray).toString();
        },
        completion: "SECH("
    },

    sign: {
        desc: "Given an input number, returns `-1` if it is negative, `1` if positive, and `0` if it is zero. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SIGN.apply(null,argsArray).toString();
        },
        completion: "SIGN("
    },

    sin: {
        desc: "Returns the sine of an angle provided in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SIN.apply(null,argsArray).toString();
        },
        completion: "SIN("
    },

    sinh: {
        desc: "Returns the hyperbolic sine of any real number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SINH.apply(null,argsArray).toString();
        },
        completion: "SINH("
    },

    sqrt: {
        desc: "Returns the positive square root of a positive number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SQRT.apply(null,argsArray).toString();
        },
        completion: "SQRT("
    },

    sqrtpi: {
        desc: "Returns the positive square root of the product of Pi and the given positive number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SQRTPI.apply(null,argsArray).toString();
        },
        completion: "SQRTPI("
    },

    subtotal: {
        desc: "Returns a subtotal for a vertical range of cells using a specified aggregation function. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUBTOTAL.apply(null,argsArray).toString();
        },
        completion: "SUBTOTAL("
    },

    sum: {
        desc: "Returns the sum of a series of numbers and/or cells. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUM.apply(null,argsArray).toString();
        },
        completion: "SUM("
    },

    sumif: {
        desc: "Returns a conditional sum across a range. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMIF.apply(null,argsArray).toString();
        },
        completion: "SUMIF("
    },

    sumifs: {
        desc: "Returns the sum of a range depending on multiple criteria. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMIFS.apply(null,argsArray).toString();
        },
        completion: "SUMIFS("
    },

    sumproduct: {
        desc: "Calculates the sum of the products of corresponding entries in two equal-sized arrays or ranges. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMPRODUCT.apply(null,argsArray).toString();
        },
        completion: "SUMPRODUCT("
    },

    sumsq: {
        desc: "Returns the sum of the squares of a series of numbers and/or cells. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMSQ.apply(null,argsArray).toString();
        },
        completion: "SUMSQ("
    },

    sumx2my2: {
        desc: "Calculates the sum of the differences of the squares of values in two arrays. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMX2MY2.apply(null,argsArray).toString();
        },
        completion: "SUMX2MY2("
    },

    sumx2py2: {
        desc: "Calculates the sum of the sums of the squares of values in two arrays. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMX2PY2.apply(null,argsArray).toString();
        },
        completion: "SUMX2PY2("
    },

    sumxmy2: {
        desc: "Calculates the sum of the squares of differences of values in two arrays. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUMXMY2.apply(null,argsArray).toString();
        },
        completion: "SUMXMY2("
    },

    tan: {
        desc: "Returns the tangent of an angle provided in radians. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TAN.apply(null,argsArray).toString();
        },
        completion: "TAN("
    },

    tanh: {
        desc: "Returns the hyperbolic tangent of any real number. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TANH.apply(null,argsArray).toString();
        },
        completion: "TANH("
    },

    trunc: {
        desc: "Truncates a number to a certain number of significant digits by omitting less significant digits. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TRUNC.apply(null,argsArray).toString();
        },
        completion: "TRUNC("
    },

    avedev: {
        desc: "Calculates the average of the magnitudes of deviations of data from a dataset\'s mean. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.AVEDEV.apply(null,argsArray).toString();
        },
        completion: "AVEDEV("
    },

    average: {
        desc: "Returns the numerical average value in a dataset, ignoring text. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.AVERAGE.apply(null,argsArray).toString();
        },
        completion: "AVERAGE("
    },

    averagea: {
        desc: "Returns the numerical average value in a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.AVERAGEA.apply(null,argsArray).toString();
        },
        completion: "AVERAGEA("
    },

    averageif: {
        desc: "Returns the average of a range depending on criteria. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.AVERAGEIF.apply(null,argsArray).toString();
        },
        completion: "AVERAGEIF("
    },

    averageifs: {
        desc: "Returns the average of a range depending on multiple criteria. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.AVERAGEIFS.apply(null,argsArray).toString();
        },
        completion: "AVERAGEIFS("
    },

    betadist: {
        desc: "See BETA.DIST.",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BETADIST.apply(null,argsArray).toString();
        },
        completion: "BETADIST("
    },

    betainv: {
        desc: "See BETA.INV",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BETAINV.apply(null,argsArray).toString();
        },
        completion: "BETAINV("
    },

    binomdist: {
        desc: "Calculates the probability of drawing a certain number of successes (or a maximum number of successes) in a certain number of tries given a population of a certain size containing a certain number of successes, with replacement of draws. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.BINOMDIST.apply(null,argsArray).toString();
        },
        completion: "BINOMDIST("
    },

    correl: {
        desc: "Calculates r, the Pearson product-moment correlation coefficient of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CORREL.apply(null,argsArray).toString();
        },
        completion: "CORREL("
    },

    count: {
        desc: "Returns a count of the number of numeric values in a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COUNT.apply(null,argsArray).toString();
        },
        completion: "COUNT("
    },

    counta: {
        desc: "Returns a count of the number of values in a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COUNTA.apply(null,argsArray).toString();
        },
        completion: "COUNTA("
    },

    countblank: {
        desc: "Returns the number of empty cells in a given range. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COUNTBLANK.apply(null,argsArray).toString();
        },
        completion: "COUNTBLANK("
    },

    countif: {
        desc: "Returns a conditional count across a range. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COUNTIF.apply(null,argsArray).toString();
        },
        completion: "COUNTIF("
    },

    countifs: {
        desc: "Returns the count of a range depending on multiple criteria. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COUNTIFS.apply(null,argsArray).toString();
        },
        completion: "COUNTIFS("
    },

    countunique: {
        desc: "Counts the number of unique values in a list of specified values and ranges. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.COUNTUNIQUE.apply(null,argsArray).toString();
        },
        completion: "COUNTUNIQUE("
    },

    devsq: {
        desc: "Calculates the sum of squares of deviations based on a sample. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.DEVSQ.apply(null,argsArray).toString();
        },
        completion: "DEVSQ("
    },

    expondist: {
        desc: "See EXPON.DIST",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EXPONDIST.apply(null,argsArray).toString();
        },
        completion: "EXPONDIST("
    },

    fdist: {
        desc: "See F.DIST.RT.",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FDIST.apply(null,argsArray).toString();
        },
        completion: "FDIST("
    },

    finv: {
        desc: "See F.INV.RT",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FINV.apply(null,argsArray).toString();
        },
        completion: "FINV("
    },

    fisher: {
        desc: "Returns the Fisher transformation of a specified value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FISHER.apply(null,argsArray).toString();
        },
        completion: "FISHER("
    },

    fisherinv: {
        desc: "Returns the inverse Fisher transformation of a specified value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FISHERINV.apply(null,argsArray).toString();
        },
        completion: "FISHERINV("
    },

    forecast: {
        desc: "Calculates the expected y-value for a specified x based on a linear regression of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FORECAST.apply(null,argsArray).toString();
        },
        completion: "FORECAST("
    },

    frequency: {
        desc: "Calculates the frequency distribution of a one-column array into specified classes. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FREQUENCY.apply(null,argsArray).toString();
        },
        completion: "FREQUENCY("
    },

    gamma: {
        desc: "Returns the Gamma function evaluated at the specified value. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GAMMA.apply(null,argsArray).toString();
        },
        completion: "GAMMA("
    },

    gammaln: {
        desc: "Returns the the logarithm of a specified Gamma function, base e (Euler\'s number). ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GAMMALN.apply(null,argsArray).toString();
        },
        completion: "GAMMALN("
    },

    gauss: {
        desc: "The GAUSS function returns the probability that a random variable, drawn from a normal distribution, will be between the mean and z standard deviations above (or below) the mean. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GAUSS.apply(null,argsArray).toString();
        },
        completion: "GAUSS("
    },

    geomean: {
        desc: "Calculates the geometric mean of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GEOMEAN.apply(null,argsArray).toString();
        },
        completion: "GEOMEAN("
    },

    growth: {
        desc: "Given partial data about an exponential growth trend, fits an ideal exponential growth trend and/or predicts further values. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.GROWTH.apply(null,argsArray).toString();
        },
        completion: "GROWTH("
    },

    harmean: {
        desc: "Calculates the harmonic mean of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.HARMEAN.apply(null,argsArray).toString();
        },
        completion: "HARMEAN("
    },

    hypgeomdist: {
        desc: "Calculates the probability of drawing a certain number of successes in a certain number of tries given a population of a certain size containing a certain number of successes, without replacement of draws. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.HYPGEOMDIST.apply(null,argsArray).toString();
        },
        completion: "HYPGEOMDIST("
    },

    intercept: {
        desc: "Calculates the y-value at which the line resulting from linear regression of a dataset will intersect the y-axis (x=0). ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.INTERCEPT.apply(null,argsArray).toString();
        },
        completion: "INTERCEPT("
    },

    kurt: {
        desc: "Calculates the kurtosis of a dataset, which describes the shape, and in particular the \"peakedness\" of that dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.KURT.apply(null,argsArray).toString();
        },
        completion: "KURT("
    },

    large: {
        desc: "Returns the nth largest element from a data set, where n is user-defined. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LARGE.apply(null,argsArray).toString();
        },
        completion: "LARGE("
    },

    linest: {
        desc: "Given partial data about a linear trend, calculates various parameters about the ideal linear trend using the least-squares method. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LINEST.apply(null,argsArray).toString();
        },
        completion: "LINEST("
    },

    lognormdist: {
        desc: "Returns the value of the log-normal cumulative distribution with given mean and standard deviation at a specified value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LOGNORMDIST.apply(null,argsArray).toString();
        },
        completion: "LOGNORMDIST("
    },

    max: {
        desc: "Returns the maximum value in a numeric dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MAX.apply(null,argsArray).toString();
        },
        completion: "MAX("
    },

    maxa: {
        desc: "Returns the maximum numeric value in a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MAXA.apply(null,argsArray).toString();
        },
        completion: "MAXA("
    },

    median: {
        desc: "Returns the median value in a numeric dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MEDIAN.apply(null,argsArray).toString();
        },
        completion: "MEDIAN("
    },

    min: {
        desc: "Returns the minimum value in a numeric dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MIN.apply(null,argsArray).toString();
        },
        completion: "MIN("
    },

    mina: {
        desc: "Returns the minimum numeric value in a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MINA.apply(null,argsArray).toString();
        },
        completion: "MINA("
    },

    normdist: {
        desc: "Returns the value of the normal distribution function (or normal cumulative distribution function) for a specified value, mean, and standard deviation. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NORMDIST.apply(null,argsArray).toString();
        },
        completion: "NORMDIST("
    },

    norminv: {
        desc: "Returns the value of the inverse normal distribution function for a specified value, mean, and standard deviation. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NORMINV.apply(null,argsArray).toString();
        },
        completion: "NORMINV("
    },

    normsdist: {
        desc: "Returns the value of the standard normal cumulative distribution function for a specified value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NORMSDIST.apply(null,argsArray).toString();
        },
        completion: "NORMSDIST("
    },

    normsinv: {
        desc: "Returns the value of the inverse standard normal distribution function for a specified value. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.NORMSINV.apply(null,argsArray).toString();
        },
        completion: "NORMSINV("
    },

    pearson: {
        desc: "Calculates r, the Pearson product-moment correlation coefficient of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PEARSON.apply(null,argsArray).toString();
        },
        completion: "PEARSON("
    },

    permut: {
        desc: "Returns the number of ways to choose some number of objects from a pool of a given size of objects, considering order. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PERMUT.apply(null,argsArray).toString();
        },
        completion: "PERMUT("
    },

    permutationa: {
        desc: "Returns the number of permutations for selecting a group of objects (with replacement) from a total number of objects. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PERMUTATIONA.apply(null,argsArray).toString();
        },
        completion: "PERMUTATIONA("
    },

    phi: {
        desc: "The PHI function returns the value of the normal distribution with mean 0 and standard deviation 1. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PHI.apply(null,argsArray).toString();
        },
        completion: "PHI("
    },

    prob: {
        desc: "Given a set of values and corresponding probabilities, calculates the probability that a value chosen at random falls between two limits. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PROB.apply(null,argsArray).toString();
        },
        completion: "PROB("
    },

    rsq: {
        desc: "Calculates the square of r, the Pearson product-moment correlation coefficient of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.RSQ.apply(null,argsArray).toString();
        },
        completion: "RSQ("
    },

    skew: {
        desc: "Calculates the skewness of a dataset, which describes the symmetry of that dataset about the mean. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SKEW.apply(null,argsArray).toString();
        },
        completion: "SKEW("
    },

    slope: {
        desc: "Calculates the slope of the line resulting from linear regression of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SLOPE.apply(null,argsArray).toString();
        },
        completion: "SLOPE("
    },

    small: {
        desc: "Returns the nth smallest element from a data set, where n is user-defined. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SMALL.apply(null,argsArray).toString();
        },
        completion: "SMALL("
    },

    standardize: {
        desc: "Calculates the normalized equivalent of a random variable given mean and standard deviation of the distribution. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.STANDARDIZE.apply(null,argsArray).toString();
        },
        completion: "STANDARDIZE("
    },

    stdeva: {
        desc: "Calculates the standard deviation based on a sample, setting text to the value `0`. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.STDEVA.apply(null,argsArray).toString();
        },
        completion: "STDEVA("
    },

    stdevp: {
        desc: "Calculates the standard deviation based on an entire population. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.STDEVP.apply(null,argsArray).toString();
        },
        completion: "STDEVP("
    },

    stdevpa: {
        desc: "Calculates the standard deviation based on an entire population, setting text to the value `0`. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.STDEVPA.apply(null,argsArray).toString();
        },
        completion: "STDEVPA("
    },

    steyx: {
        desc: "Calculates the standard error of the predicted y-value for each x in the regression of a dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.STEYX.apply(null,argsArray).toString();
        },
        completion: "STEYX("
    },

    tdist: {
        desc: "Calculates the probability for Student\'s t-distribution with a given input (x). ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TDIST.apply(null,argsArray).toString();
        },
        completion: "TDIST("
    },

    tinv: {
        desc: "See T.INV.2T",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TINV.apply(null,argsArray).toString();
        },
        completion: "TINV("
    },

    trimmean: {
        desc: "Calculates the mean of a dataset excluding some proportion of data from the high and low ends of the dataset. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TRIMMEAN.apply(null,argsArray).toString();
        },
        completion: "TRIMMEAN("
    },

    vara: {
        desc: "Calculates an estimate of variance based on a sample, setting text to the value `0`. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.VARA.apply(null,argsArray).toString();
        },
        completion: "VARA("
    },

    varp: {
        desc: "Calculates the variance based on an entire population. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.VARP.apply(null,argsArray).toString();
        },
        completion: "VARP("
    },

    varpa: {
        desc: "Calculates the variance based on an entire population, setting text to the value `0`. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.VARPA.apply(null,argsArray).toString();
        },
        completion: "VARPA("
    },

    ztest: {
        desc: "See Z.TEST.",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ZTEST.apply(null,argsArray).toString();
        },
        completion: "ZTEST("
    },

    char: {
        desc: "Convert a number into a character according to the current Unicode table. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CHAR.apply(null,argsArray).toString();
        },
        completion: "CHAR("
    },

    clean: {
        desc: "Returns the text with the non-printable ASCII characters removed. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CLEAN.apply(null,argsArray).toString();
        },
        completion: "CLEAN("
    },

    code: {
        desc: "Returns the numeric Unicode map value of the first character in the string provided. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CODE.apply(null,argsArray).toString();
        },
        completion: "CODE("
    },

    concatenate: {
        desc: "Appends strings to one another. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.CONCATENATE.apply(null,argsArray).toString();
        },
        completion: "CONCATENATE("
    },

    exact: {
        desc: "Tests whether two strings are identical. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.EXACT.apply(null,argsArray).toString();
        },
        completion: "EXACT("
    },

    find: {
        desc: "Returns the position at which a string is first found within text. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.FIND.apply(null,argsArray).toString();
        },
        completion: "FIND("
    },

    left: {
        desc: "Returns a substring from the beginning of a specified string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LEFT.apply(null,argsArray).toString();
        },
        completion: "LEFT("
    },

    len: {
        desc: "Returns the length of a string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LEN.apply(null,argsArray).toString();
        },
        completion: "LEN("
    },

    lower: {
        desc: "Converts a specified string to lowercase. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.LOWER.apply(null,argsArray).toString();
        },
        completion: "LOWER("
    },

    mid: {
        desc: "Returns a segment of a string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.MID.apply(null,argsArray).toString();
        },
        completion: "MID("
    },

    proper: {
        desc: "Capitalizes each word in a specified string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.PROPER.apply(null,argsArray).toString();
        },
        completion: "PROPER("
    },

    regexextract: {
        desc: "Extracts matching substrings according to a regular expression. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.REGEXEXTRACT.apply(null,argsArray).toString();
        },
        completion: "REGEXEXTRACT("
    },

    regexmatch: {
        desc: "Whether a piece of text matches a regular expression. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.REGEXMATCH.apply(null,argsArray).toString();
        },
        completion: "REGEXMATCH("
    },

    regexreplace: {
        desc: "Replaces part of a text string with a different text string using regular expressions. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.REGEXREPLACE.apply(null,argsArray).toString();
        },
        completion: "REGEXREPLACE("
    },

    replace: {
        desc: "Replaces part of a text string with a different text string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.REPLACE.apply(null,argsArray).toString();
        },
        completion: "REPLACE("
    },

    rept: {
        desc: "Returns specified text repeated a number of times. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.REPT.apply(null,argsArray).toString();
        },
        completion: "REPT("
    },

    right: {
        desc: "Returns a substring from the end of a specified string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.RIGHT.apply(null,argsArray).toString();
        },
        completion: "RIGHT("
    },

    roman: {
        desc: "Formats a number in Roman numerals. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.ROMAN.apply(null,argsArray).toString();
        },
        completion: "ROMAN("
    },

    search: {
        desc: "Returns the position at which a string is first found within text. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SEARCH.apply(null,argsArray).toString();
        },
        completion: "SEARCH("
    },

    split: {
        desc: "Divides text around a specified character or string, and puts each fragment into a separate cell in the row. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SPLIT.apply(null,argsArray).toString();
        },
        completion: "SPLIT("
    },

    substitute: {
        desc: "Replaces existing text with new text in a string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.SUBSTITUTE.apply(null,argsArray).toString();
        },
        completion: "SUBSTITUTE("
    },

    t: {
        desc: "Returns string arguments as text. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.T.apply(null,argsArray).toString();
        },
        completion: "T("
    },

    trim: {
        desc: "Removes leading and trailing spaces in a specified string. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TRIM.apply(null,argsArray).toString();
        },
        completion: "TRIM("
    },

    textjoin: {
        desc: "Combines the text from multiple strings and/or arrays, with a specifiable delimiter separating the different texts. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.TEXTJOIN.apply(null,argsArray).toString();
        },
        completion: "TEXTJOIN("
    },

    unichar: {
        desc: "Returns the Unicode character for a number. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.UNICHAR.apply(null,argsArray).toString();
        },
        completion: "UNICHAR("
    },

    unicode: {
        desc: "Returns the decimal Unicode value of the first character of the text. .",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.UNICODE.apply(null,argsArray).toString();
        },
        completion: "UNICODE("
    },

    upper: {
        desc: "Converts a specified string to uppercase. ",
        compute(argsArray){
            if(!Array.isArray(argsArray)) argsArray = [argsArray]
            return formulajs.UPPER.apply(null,argsArray).toString();
        },
        completion: "UPPER("
    },
};
