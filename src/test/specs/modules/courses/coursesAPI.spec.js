import LoginPage from "../../../pageobjects/login.page";
import SettingsProfilePage from "../../../pageobjects/settings/settingsProfile.page"
import MenuPage from "../../../pageobjects/menu.page"
import CoursesPage from "../../../pageobjects/modules/courses/courses.page"
import ContentsJSSPage from "../../../pageobjects/modules/courses/javaScriptSyntax/contentsJSS.page"
import userSearchByEmail from "../../../../utils/api/userSearchByEmail";
import getAllCourses from "../../../../utils/api/getAllCourses";


describe('Java Script Syntax', () => {
    let namesAllCoursesAPI = []; // создаем массив из названия всех курсов которые есть у студента
    let namesAllCoursesUI = [];
    let countAllCoursesAPI = 0;
    let countAllCoursesUI = 0;

    before(() => {
        LoginPage.login(SettingsProfilePage.credentials[3].username, SettingsProfilePage.credentials[3].password);
        MenuPage.menuCourses.click();
    })

    it('Get All courses - API', async () => {
        const allCourses = await getAllCourses();
        countAllCoursesAPI = allCourses.payload.length;

        let responseArrayObjectsOfCourses = Object.values(allCourses.payload) // это массив объектов(курсов) который приходит в ответе

        for(let eachCourse in responseArrayObjectsOfCourses){
            namesAllCoursesAPI.push(responseArrayObjectsOfCourses[eachCourse].name) // пушим в массив все названия курсов которые есть у студентов (приходят с бэка)
        }

        console.log("-------------------------------------------------------------------")
        console.log(countAllCoursesAPI)
        console.log(namesAllCoursesAPI)
        console.log("-------------------------------------------------------------------")
    })

// далее создать такой же массив названий курсов, только с UI и затем прописать функцию, которая сравнит оба массива на наличие всех курсов (на идентичность)

    // it('Get All courses UI', () => {
    //
    //
    // })
})