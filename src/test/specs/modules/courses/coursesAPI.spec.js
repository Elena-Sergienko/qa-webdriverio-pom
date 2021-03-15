import LoginPage from "../../../pageobjects/login.page";
import SettingsProfilePage from "../../../pageobjects/settings/settingsProfile.page"
import MenuPage from "../../../pageobjects/menu.page"
import CoursesPage from "../../../pageobjects/modules/courses/courses.page"
import getAllCourses from "../../../../utils/api/getAllCourses";
import { getUserToken } from "../../../../utils/getUserData";


describe('Java Script Syntax', () => {
    let namesAllCoursesAPI = []; // создаем массив из названия всех курсов которые есть у студента
    let namesAllCoursesUI = [];
    let countAllCoursesAPI = 0;
    let countAllCoursesUI = 0;
    let userToken;

    it('Get All courses from UI', () => {
        // LoginPage.login(SettingsProfilePage.credentials[3].username, SettingsProfilePage.credentials[3].password);
        LoginPage.login(SettingsProfilePage.credentials[0].username, SettingsProfilePage.credentials[0].password);
        MenuPage.menuCourses.click();
        countAllCoursesUI = CoursesPage.listCourses.length;
        CoursesPage.listCourses.map(el => namesAllCoursesUI.push(el.getText()))
    })

// подумать - может токен студента нужно чтобы получить именно его курсы, а не все курсы как получает админ по своему токену
    it("Get Token", async () => {
        userToken = await getUserToken(SettingsProfilePage.credentials[3].username, SettingsProfilePage.credentials[3].password)

        console.log("*******************************************************************")
        console.log("User Token: " + userToken)
        console.log("*******************************************************************")
    })

    it('Get All courses - API', async () => {
        const allCourses = await getAllCourses(process.env.ADMIN_TOKEN);
        // const allCourses = await getAllCourses(userToken);
        countAllCoursesAPI = allCourses.payload.length;


        let arrayObjectsAllCoursesFromResponse = Object.values(allCourses.payload) // это массив объектов(курсов) который приходит в ответе

        for (let eachCourse in arrayObjectsAllCoursesFromResponse) {
            namesAllCoursesAPI.push(arrayObjectsAllCoursesFromResponse[eachCourse].name) // пушим в массив все названия курсов которые есть у студентов (приходят с бэка)
        }

        console.log("*******************************************************************")
        console.log("Count All courses API: " + countAllCoursesAPI)
        console.log("Names All courses API: " + namesAllCoursesAPI)
        // console.log("-------------------------------------------------------------------")
        // console.log(Object.entries(allCourses.payload[0])) // похоже что entries выводит и ключи и значения объекта
        // console.log("-------------------------------------------------------------------")
        // console.log(Object.values(allCourses.payload[0])) // values выводит только значения объекта (без их ключей)
        console.log("*******************************************************************")
    })

// далее создать такой же массив названий курсов, только с UI и затем прописать функцию, которая сравнит оба массива на наличие всех курсов (на идентичность)

    it('Compare All courses API and UI', () => {
        countAllCoursesUI = CoursesPage.listCourses.length;
        CoursesPage.listCourses.map(el => namesAllCoursesUI.push(el.getText()))


        console.log("*******************************************************************")
        console.log("Count All courses UI: " + countAllCoursesUI)
        console.log("Names All courses UI: " + namesAllCoursesUI)
        console.log("*******************************************************************")

        let coursePresentUIAbsentAPI = [];
        let coursePresentAPIAbsentUI = [];

        namesAllCoursesAPI.forEach( el => !namesAllCoursesUI.includes(el) ? coursePresentAPIAbsentUI.push(el) : null )
        namesAllCoursesUI.forEach( el => !namesAllCoursesAPI.includes(el) ? coursePresentUIAbsentAPI.push(el) : null )


        console.log("888888888888888888888888888888888888888888888888888888888888888888")
        console.log("API absent: " + coursePresentUIAbsentAPI)
        console.log("UI absent: " + coursePresentAPIAbsentUI)
        console.log("888888888888888888888888888888888888888888888888888888888888888888")
    })
})