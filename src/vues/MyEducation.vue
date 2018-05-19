<template lang="">
  <div class="uk-container uk-flex uk-flex-center uk-padding">
    <h1 class="uk-text-center uk-margin-remove" style="text-transform: uppercase;">My Education</h1>
    <hr class="divider">
      <div class="uk-section uk-section-primary uk-preserve-color uk-padding-remove uk-container-small">
          <div class="uk-padding">
              <div class="uk-grid-match uk-child-width-1-1" uk-grid>
                  <div>
                      <div class="uk-card uk-card-default uk-card-body">
                          <h4 class="uk-text-left uk-margin-remove">Computer Programming Diploma</h4>
                          <p class="uk-margin-remove"><strong class="uk-text-left">Georgian College</strong><span class="rightFloat">January 2016 - December 2018</span></p>
                          <h6 class="uk-text-left grade">Overall CGPA 4.0</h6>
                          <p class="uk-text-small">This program helped me build the most relevant and popular skills of the software and web development industry. As I progressed through the two years, the courses I took helped me gain insight and experience in the field of Software and Web development, Systems Analysis as well as Project management. A structured approach to problem solving, effective oral and written communications, and attention to standards and documentation were stressed throughout the program. Industry trends and requirements were continually monitored to ensure curriculum remains current and relevant. This not only helped in gaining some highly in-demand industry skills, but also helped in becoming an effective learner.</p>
                      </div>
                  </div>
                  <div>
                      <div class="uk-card uk-card-default uk-card-body">
                        <h4 class="uk-text-left uk-margin-remove">High School</h4>
                        <p class="uk-margin-remove"><strong class="uk-text-left">Om Parkash Bansal Modern School</strong><span class="rightFloat">1999 - 2015</span></p>
                        <h6 class="uk-text-left grade">Final High School grade: 92.2%</h6>
                        <p class="uk-text-small">Studied Multimedia & Application development, Economics, Accountancy and Business Management in high school.</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    <div></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.rightFloat {
  float: right;
}
hr.divider {
    border-bottom: 2.5px solid #5a5a5a;
    width: 60px;
    margin: 10px 0 30px;
    border-radius: 3px;
}
h6.grade {
    margin: 0.4em 0;
    display: inline-block;
    background: rgba(0,0,0,0.04);
    padding: 0.3em 0.3em;
    border-radius: 3px;
    color: #444;
}
</style>
