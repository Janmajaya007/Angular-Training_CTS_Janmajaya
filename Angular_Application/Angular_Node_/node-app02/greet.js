export const goodMorning = unm => `Good Morning ${unm}`; 
export const goodAfternoon = unm => `Good afternoon ${unm}`;
export const goodEvening = unm => `Good evening ${unm}`;

const greetUser= unm => {

    let h = new Date().getHours();

    if(h >=3 && h <=11) return goodMorning(unm);
    else if (h >=11 && h <=14) return goodAfternoon(unm);
    else return goodEvening(unm);

}
export default greetUser;