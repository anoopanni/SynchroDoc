# SynchroDoc
DocSync Pro is an innovative online collaboration platform designed to empower teams and individuals with seamless document creation and sharing. 


With real-time editing, intuitive commenting, and robust version control, DocSync Pro simplifies how you work on documents together. Whether you're co-writing a report, brainstorming ideas, or conducting a collaborative research project, our platform ensures everyone stays on the same page. 


Say goodbye to the confusion of emailing drafts and hello to the efficiency of unified document management. DocSync Pro: Where your ideas sync effortlessly, and your documents shine together.


# Deployment information/commands


1. Create app with name: synchrodoc-server 

2. heroku git:remote --remote heroku-server -a synchrodoc-server

3. git subtree push --prefix server heroku-server master

4. Create app with name: synchrodoc-client

5. heroku git:remote --remote heroku-client -a synchrodoc-client

6. git subtree push --prefix client heroku-client master


