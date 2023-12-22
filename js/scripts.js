// populate skills section
$(
    () => {
        let skillSection = $('.skill-section');
        let skills = '';
        for (skill of SKILLS) {
            skills += `<div class = "skill"><span>${skill}</span></div>`;
        }
        skillSection.after(skills);
    }
);

// populate tools section
$(
    () => {
        let toolSection = $('.tools-section');
        let tools = '';
        for (tool of TOOLS) {
            tools += `<div class = "skill"><span>${tool}</span></div>`
        }
        toolSection.after(tools);
    }
);

// populate Interest section
$(
    () => {
        let interestSection = $('.interest-section');
        let interests = '';
        for (interest of INTERESTS) {
            interests += `<div class = "skill"><span>${interest}</span></div>`
        }
        interestSection.after(interests);
    }
);

// populate achievements section
$(
    () => {
        let achievementSection = $('.achievements ul');
        let achievements = '';
        for (achievement of ACHIEVEMENTS) {
            achievements += `<li class = "achievement-li padding-s"><span>${achievement}</span></li>`
        }
        achievementSection.after(achievements);
    }
);

// populate CDW achievements section

$(
    () => {
        let achievementSection = $('.achievements-cdw ul');
        let achievements = '';
        for (achievement of ACHIEVEMENTS_CDW) {
            achievements += `<li class = "achievement-li padding-s"><span>${achievement}</span></li>`
        }
        achievementSection.after(achievements);
    }
);


// populate project section
$(
    () => {
        let projectSection = $('.project-details');
        let projects = '';
        for (project of PROJECTS) {
            let projectTitle = `<div class= "project-title"><h3>${project.title}</h3></div>`;
            let projectDesc = `<div class="project-desc"><li class="padding-s">${project.desc}</li></div>`
            projects += `<div class="project margin-bottom">${projectTitle + projectDesc}</div>`;
        }
        projectSection.after(projects);
    }
);

$(
    () => {
        let experienceSection = $('.experience');
        let cdwExperienceSection = $('.experience-cdw');
        let currentExp = getCurrentWorkExperince();
        let cdwExp = getCurrentWorkExperince(new Date(CDW_START_DATE));
        experienceSection.before(currentExp);
        cdwExperienceSection.before(cdwExp);
    }
);



const getCurrentWorkExperince = (startDate = new Date(WORK_START_DATE), endDate = new Date()) => {

    const YEAR_COUNT = 12 * 30 * 24 * 60 * 60 * 1000;  // Months * Days * Hours * minutes * seconds * milliseconds

    function dateDiffInYears(startDate, endDate) {

        const utc1 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const utc2 = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

        return parseFloat((utc2 - utc1) / YEAR_COUNT).toFixed(1);
    }

    return Number(dateDiffInYears(startDate, endDate));
}

$(document).ready(function () {
    $('#downloadPDF').click(function () {
        domtoimage.toPng(document.getElementById('content'))
            .then(function (blob) {
                var pdf = new jsPDF('l', 'pt', [$('#content').width(), $('#content').height()]);
    
                pdf.addImage(blob, 'PNG', 0, 0, $('#content').width(), $('#content').height());
                pdf.save("test.pdf");
    
                that.options.api.optionsChanged();
            });
    });
});
