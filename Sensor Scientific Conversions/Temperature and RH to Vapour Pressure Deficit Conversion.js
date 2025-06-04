/*ICT International
Example Javascript for converting an Air Temperature and Humidity Sensor to Vapour Pressure deficit
*/
			var air_temperature = "Air Temperature Sensor"; //Unit: °C, Convert to var to feed both array push and VPD calc.
			var relative_humidity = "Relative Humidity Sensor"; //Unit 0-100%, Convert to var to feed both array push and VPD calc.
			var svcal = ((17.27 * air_temperature)/(237.3 + air_temperature)); //1st calc step SVP.
			var svp = 0.6108 * Math.exp(svcal); //2nd calc step, Saturated Vapour Pressure in Pascals.
			var vpdcalc = +(((100 - relative_humidity)/100) * svp).toFixed(3); //AVP & Calculated VPD.
			arr.push(["vapour-pressure-deficit", 0, vpdcalc, src, "kPa"]); //Print to Array (Example)
/*
References or Updates:
Validated 30/Sep/2024
Based on the FAO Calculations	
1	https://www.fao.org/4/y7223e/y7223e0i.htm
	saturation vapour pressure (es)
2	https://www.fao.org/4/X0490E/x0490e06.htm
	ETO
*/
