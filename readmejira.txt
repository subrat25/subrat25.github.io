Note : After launching the hands-on, click on the credentials button on the top right to type something on the terminal.

Installation steps

sudo wget https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-core-8.5.7-x64.bin
sudo chmod a+x atlassian-jira-core-8.5.7-x64.bin
sudo ./atlassian-jira-core-8.5.7-x64.bin
sudo /etc/init.d/jira start
Once the installation is complete, access Jira instance on 8080 port using the below link.

http://server-IP:8080

Jira Instance Set up

Set up JIRA by selecting the I'll set it up myself option.
Set up the database by selecting the Built-in setup option.
Enter the title mode as public and the base URL.On the next page it asks you How do you want to use JIRA? Choose Jira and click on next
Specify License key - Choose the options accordingly and apply the License Note : f you are unable to connect to Atlassian, sign up or log in to the account using https://my.atlassian.com/license/evaluation to generate a license key
Set up the administrator account by creating the Atlassian account and entering the license key.
Add Zephyr for Jira - Test Management

Click the cog icon.
Choose Manage apps from the drop-down list.
Search for Zephyr for Jira - Test Management and install it. Once Zephyr is integrated with JIRA, the 'Test' tab appears on the top menu.
Note : If you face any error while applying license follow the below steps :

Generate a license by clicking on this link
Choose Try it free > Server > Generate Zephyr License
Copy the generated license in this path (cog icon > Atlassian Market Place > Manage Apps > ZEPHYR FOR JIRA > License > Update License)
Hands-on

1.Create Project PlayIssues

Projects > Create Projects > Enter PlayIssues > Click on Submit

2.Configure Test Issue Type to the created Project

Settings > Projects > Select Project > Issue Types > Actions > Edit Issue Type > Drag and drop the available issue types to the current scheme > Click on save

3.Create component Testing

Projects > Select project > Component > Enter the required details and click on Create

4.Create Version 1.0

Projects > Select project > Versions > Enter the required details and click on Create

5.Create and configure the following fields using custom screens by clicking the cog icon > Issues > Screens.

Summary
Issue Type
Fix Version/s
Component/s
Description
Priority
Due Date
Assignee
Reporter
Attachment
6.Create Test in Jira

7.Write Test cases for the created test

8.Create a Test Cycle by clicking Tests > Plan Test Cycle > Create New Cycle.

9.Enter details in the required fields, and click Save.

10.Add test cases to the test cycle by clicking thecog icon > Add Tests.

11.Execute test cases in the test cycle by clicking the E (Execute test) icon.

Create a dashboard named Play-Issues by Clicking Dashboards > Manage Dashboards > Create New Dashboard. Enter details in the fields, and click Add*.