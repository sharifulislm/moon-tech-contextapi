import React from 'react';

const HomePage = () => {
    return (
        <div className='m-'>
            <h1> Home page copy </h1>

            <section
      class="sa-assessment-flow__card sa-assessment-quiz artdeco-card overflow-hidden display-flex flex-column"
    >
      <header class="sa-assessment-flow__header">
        <div class="p3 display-flex align-items-center flex-column">
          <h1 class="text-align-center t-20 t-white t-normal mt1">
            MongoDB assessment
          </h1>
        </div>
      </header>

      <h2 class="visually-hidden" aria-live="polite">
        MongoDB assessment Q15/15
      </h2>

      <p
        id="assessment-a11y-title"
        class="sa-assessment-quiz__title-question t-16"
        tabindex="-1"
      >
        <span class="sa-assessment-quiz__multi-line"
          ><span aria-hidden="true"
            ><!---->Suppose you are using the<span class="white-space-pre">
            </span
            ><code><!---->mongoimport<!----></code
            ><span class="white-space-pre"> </span>command to import personnel
            data and there is a unique index on the email field. What happens
            when there are duplicate emails in the import?<!----></span
          ><span class="visually-hidden"
            ><!---->Suppose you are using the<span class="white-space-pre">
            </span
            ><code><!---->mongoimport<!----></code
            ><span class="white-space-pre"> </span>command to import personnel
            data and there is a unique index on the email field. What happens
            when there are duplicate emails in the import?<!----></span
          ></span
        >
      </p>

      <div class="sa-assessment-quiz__scroll-content">
        <!---->
        <div
          class="sa-assessment-quiz__response display-flex flex-column justify-space-between flex-grow-1"
        >
          <ul class="list-style-none">
            <li
              class="sa-question-multichoice__item sa-question-basic-multichoice__item"
            >
              <input
                name="urn:li:assessmentQuestion:116648"
                id="urn:li:assessmentQuestion:116648-1"
                class="sa-question-multichoice__input sa-question-basic-multichoice__input ember-checkbox ember-view"
                aria-labelledby="skill-assessment-quiz-0"
                type="radio"
              />
              <label
                for="urn:li:assessmentQuestion:116648-1"
                aria-live="polite"
                aria-atomic="true"
                class="m0"
              >
                <!---->

                <p id="skill-assessment-quiz-0">
                  <span class="sa-question-basic-multichoice__multiline"
                    ><span class="white-space-pre"> </span
                    ><span aria-hidden="true"
                      ><!---->The import command prompts you to correct the bad
                      record.<!----></span
                    ><span class="visually-hidden"
                      ><!---->The import command prompts you to correct the bad
                      record.<!----></span
                    ></span
                  >
                </p>
              </label>
            </li>
            <li
              class="sa-question-multichoice__item sa-question-basic-multichoice__item"
            >
              <input
                name="urn:li:assessmentQuestion:116648"
                id="urn:li:assessmentQuestion:116648-2"
                class="sa-question-multichoice__input sa-question-basic-multichoice__input ember-checkbox ember-view"
                aria-labelledby="skill-assessment-quiz-1"
                type="radio"
              />
              <label
                for="urn:li:assessmentQuestion:116648-2"
                aria-live="polite"
                aria-atomic="true"
                class="m0"
              >
                <!---->

                <p id="skill-assessment-quiz-1">
                  <span class="sa-question-basic-multichoice__multiline"
                    ><span class="white-space-pre"> </span
                    ><span aria-hidden="true"
                      ><!---->The import command aborts without importing any
                      records.<!----></span
                    ><span class="visually-hidden"
                      ><!---->The import command aborts without importing any
                      records.<!----></span
                    ></span
                  >
                </p>
              </label>
            </li>
            <li
              class="sa-question-multichoice__item sa-question-basic-multichoice__item"
            >
              <input
                name="urn:li:assessmentQuestion:116648"
                id="urn:li:assessmentQuestion:116648-0"
                class="sa-question-multichoice__input sa-question-basic-multichoice__input ember-checkbox ember-view"
                aria-labelledby="skill-assessment-quiz-2"
                type="radio"
              />
              <label
                for="urn:li:assessmentQuestion:116648-0"
                aria-live="polite"
                aria-atomic="true"
                class="m0"
              >
                <!---->

                <p id="skill-assessment-quiz-2">
                  <span class="sa-question-basic-multichoice__multiline"
                    ><span class="white-space-pre"> </span
                    ><span aria-hidden="true"
                      ><!---->The import command doesn’t import the bad document
                      but does import the rest.<!----></span
                    ><span class="visually-hidden"
                      ><!---->The import command doesn’t import the bad document
                      but does import the rest.<!----></span
                    ></span
                  >
                </p>
              </label>
            </li>
            <li
              class="sa-question-multichoice__item sa-question-basic-multichoice__item"
            >
              <input
                name="urn:li:assessmentQuestion:116648"
                id="urn:li:assessmentQuestion:116648-3"
                class="sa-question-multichoice__input sa-question-basic-multichoice__input ember-checkbox ember-view"
                aria-labelledby="skill-assessment-quiz-3"
                type="radio"
              />
              <label
                for="urn:li:assessmentQuestion:116648-3"
                aria-live="polite"
                aria-atomic="true"
                class="m0"
              >
                <!---->

                <p id="skill-assessment-quiz-3">
                  <span class="sa-question-basic-multichoice__multiline"
                    ><span class="white-space-pre"> </span
                    ><span aria-hidden="true"
                      ><!---->The import command imports records up to but not
                      including the record, and then aborts.<!----></span
                    ><span class="visually-hidden"
                      ><!---->The import command imports records up to but not
                      including the record, and then aborts.<!----></span
                    ></span
                  >
                </p>
              </label>
            </li>
          </ul>

          <div id="ember304" class="ember-view"><!----></div>

          <p class="sa-assessment-quiz__feedback pv4 ph5">
            <span class="t-14"> Something wrong with this question? </span>

            <button class="t-14 t-black t-bold" type="button">
              Give feedback
            </button>
          </p>
        </div>
      </div>
      <div class="mtA">
        <div
          id="ember305"
          class="sa-assessment-quiz__meter full-width artdeco-completeness-meter-linear artdeco-completeness-meter-linear--fluid ember-view"
        >
          <div class="artdeco-completeness-meter-linear__progress-container">
            <progress
              max="100"
              value="100"
              class="artdeco-completeness-meter-linear__progress-element"
              aria-valuetext="Current value: 15"
              aria-valuemin="0"
              aria-valuenow="15"
              aria-valuemax="15"
              style="--offset-value: 100%"
            >
              Current value: 15
            </progress>
            <!---->
          </div>
          <!---->
        </div>
      </div>
      <footer class="sa-assessment-quiz__footer">
        <div
          class="display-flex justify-space-between align-items-center pv4 ph5"
        >
          <div class="display-flex">
            <span class="t-16 mr4">Q15/15</span>
            <span>
              <div class="display-flex align-items-center">01:24</div>
              <span class="a11y-text" aria-live="polite" role="timer">
                90 seconds remaining
              </span>
            </span>
          </div>

          <button
            data-test-assessment-primary-cta="true"
            data-control-name=""
            id="ember306"
            class="sa-assessment-quiz__primary-action artdeco-button artdeco-button--2 artdeco-button--primary artdeco-button--disabled ember-view"
            disabled=""
          >
            <!---->
            <span class="artdeco-button__text"> View results </span>
          </button>
        </div>
      </footer>
    </section>
        </div>
    );
};

export default HomePage;