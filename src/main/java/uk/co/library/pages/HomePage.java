package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

import java.util.List;

/**
 * Created by bhavesh patel
 */
public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement JobTitle;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement Location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distance;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement clickLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salarymin;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salarytype;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement selectJobType;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement clickjob;


    public void enterJobTitle(String job)
    {
        sendTextToElement(JobTitle,job);
    }
    public void enterLocation(String loc)
    {
        sendTextToElement(Location,loc);

    }
    public void selectDistance(String mile) {

        selectByVisibleTextFromDropDown(distance, mile);
    }
    public void clickLink()
    {
        clickOnElement(clickLink);

    }
    public void salaryMin(String min)
    {
        sendTextToElement(salarymin,min);
    }
    public void salaryMax(String max)
    {
        sendTextToElement(salaryMax,max);

    }
    public void selectSalType(String salType)
    {
        selectByVisibleTextFromDropDown(salarytype,salType);

    }
    public void selectJobType(String jobtype)
    {
        selectByVisibleTextFromDropDown(selectJobType,jobtype);

    }
    public void clickjobbutton()
    {
        clickOnElement(clickjob);

    }

}
