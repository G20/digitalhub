<template>
  <div id="categories" class="mar-top:4">
    <modal v-if="selected" :project.sync="selected" />
    <div>
      <h2>List of projects</h2>
      <hr color="#E9E9E9">
      <div id="header-categories" class="flex row mar-bot:7 mar-top:5">
        <div class="fit">
          <h4>Filter By Category</h4>
        </div>
        <div>
          <h4 @click="clear" class="cursor:pointer">View All</h4>
        </div>
      </div>

      <!-- Categories -->
      <div class="flex wrap row justify:between">
        <div class="box cursor:pointer" @click="byCategory(SKILLS_FOR_THE_FUTURE_OF_WORK)" :class="{'selected': SKILLS_FOR_THE_FUTURE_OF_WORK === category}">
          <div>
            <svg width="30px" height="32px" viewBox="0 0 30 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.749"><g id="G20_-_Digital_Society_Platform" transform="translate(-174.000000, -473.000000)" fill="#0072BC"><g id="Group-51"><path d="M203.8635,480.349 C203.8635,480.349 203.8635,499.375 203.8635,499.375 C203.8635,502.2619 201.4697,504.6238 198.544,504.6238 C198.544,504.6238 188.8359,504.6238 188.8359,504.6238 C187.3996,504.6238 186.0431,504.0596 185.0457,503.0623 C185.0457,503.0623 174.6062,492.591 174.6062,492.591 C174.6062,492.591 176.2818,490.977 176.335,490.951 C176.6276,490.702 176.9866,490.57 177.3856,490.57 C177.6782,490.57 177.9442,490.649 178.1835,490.78 C178.2367,490.794 183.9153,494.008 183.9153,494.008 C183.9153,494.008 183.9153,478.38 183.9153,478.38 C183.9153,477.291 184.8063,476.412 185.9101,476.412 C187.0139,476.412 187.9049,477.291 187.9049,478.38 C187.9049,478.38 187.9049,487.566 187.9049,487.566 C187.9049,487.566 189.2348,487.566 189.2348,487.566 C189.2348,487.566 189.2348,475.1 189.2348,475.1 C189.2348,474.011 190.1258,473.132 191.2296,473.132 C192.3334,473.132 193.2245,474.011 193.2245,475.1 C193.2245,475.1 193.2245,487.566 193.2245,487.566 C193.2245,487.566 194.5543,487.566 194.5543,487.566 C194.5543,487.566 194.5543,476.412 194.5543,476.412 C194.5543,475.323 195.4453,474.444 196.5491,474.444 C197.6529,474.444 198.544,475.323 198.544,476.412 C198.544,476.412 198.544,487.566 198.544,487.566 C198.544,487.566 199.8738,487.566 199.8738,487.566 C199.8738,487.566 199.8738,480.349 199.8738,480.349 C199.8738,479.26 200.7649,478.38 201.8687,478.38 C202.9725,478.38 203.8635,479.26 203.8635,480.349" id="Fill-45"></path></g></g></g></svg>
          </div>
          <label class="cursor:pointer">Skills for the future of work</label>
        </div>
        <div class="box cursor:pointer" @click="byCategory(DIGITAL_GOVERNMENT)" :class="{'selected': DIGITAL_GOVERNMENT === category}">
          <div>
            <svg width="29px" height="32px" viewBox="0 0 29 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.749"><g id="G20_-_Digital_Society_Platform" transform="translate(-305.000000, -473.000000)" fill="#873299"><g id="Group-51"><path d="M308.3271,486.628 C308.3271,486.628 308.3271,497.126 308.3271,497.126 C308.3271,497.126 312.8282,497.126 312.8282,497.126 C312.8282,497.126 312.8282,486.628 312.8282,486.628 C312.8282,486.628 308.3271,486.628 308.3271,486.628 M317.3294,486.628 C317.3294,486.628 317.3294,497.126 317.3294,497.126 C317.3294,497.126 321.8305,497.126 321.8305,497.126 C321.8305,497.126 321.8305,486.628 321.8305,486.628 C321.8305,486.628 317.3294,486.628 317.3294,486.628 M305.3264,504.6238 C305.3264,504.6238 333.8335,504.6238 333.8335,504.6238 C333.8335,504.6238 333.8335,500.1249 333.8335,500.1249 C333.8335,500.1249 305.3264,500.1249 305.3264,500.1249 C305.3264,500.1249 305.3264,504.6238 305.3264,504.6238 M326.3316,486.628 C326.3316,486.628 326.3316,497.126 326.3316,497.126 C326.3316,497.126 330.8327,497.126 330.8327,497.126 C330.8327,497.126 330.8327,486.628 330.8327,486.628 C330.8327,486.628 326.3316,486.628 326.3316,486.628 M319.5799,473.132 C319.5799,473.132 305.3264,480.63 305.3264,480.63 C305.3264,480.63 305.3264,483.629 305.3264,483.629 C305.3264,483.629 333.8335,483.629 333.8335,483.629 C333.8335,483.629 333.8335,480.63 333.8335,480.63 C333.8335,480.63 319.5799,473.132 319.5799,473.132" id="Fill-47"></path></g></g></g></svg>
          </div>
          <label class="cursor:pointer">Digital Government</label>
        </div>
        <div class="box cursor:pointer" @click="byCategory(DIGITAL_INFRASTRUCTURE)" :class="{'selected': DIGITAL_INFRASTRUCTURE === category}">
          <div>
            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.749"><g id="G20_-_Digital_Society_Platform" transform="translate(-434.000000, -473.000000)" fill="#EF4023"><g id="Group-51"><path d="M440.1015,474.563 C440.1015,473.776 439.4571,473.132 438.6694,473.132 C437.8817,473.132 437.2372,473.776 437.2372,474.563 C437.2372,474.563 437.2372,480.289 437.2372,480.289 C437.2372,480.289 434.3728,480.289 434.3728,480.289 C434.3728,480.289 434.3728,488.878 434.3728,488.878 C434.3728,488.878 442.9659,488.878 442.9659,488.878 C442.9659,488.878 442.9659,480.289 442.9659,480.289 C442.9659,480.289 440.1015,480.289 440.1015,480.289 C440.1015,480.289 440.1015,474.563 440.1015,474.563 M445.8302,494.604 C445.8302,496.464 447.0333,498.039 448.6946,498.64 C448.6946,498.64 448.6946,504.6238 448.6946,504.6238 C448.6946,504.6238 451.5589,504.6238 451.5589,504.6238 C451.5589,504.6238 451.5589,498.64 451.5589,498.64 C453.2203,498.053 454.4233,496.479 454.4233,494.604 C454.4233,494.604 454.4233,491.741 454.4233,491.741 C454.4233,491.741 445.8302,491.741 445.8302,491.741 C445.8302,491.741 445.8302,494.604 445.8302,494.604 M434.3728,494.604 C434.3728,496.464 435.5759,498.039 437.2372,498.64 C437.2372,498.64 437.2372,504.6238 437.2372,504.6238 C437.2372,504.6238 440.1015,504.6238 440.1015,504.6238 C440.1015,504.6238 440.1015,498.64 440.1015,498.64 C441.7629,498.039 442.9659,496.464 442.9659,494.604 C442.9659,494.604 442.9659,491.741 442.9659,491.741 C442.9659,491.741 434.3728,491.741 434.3728,491.741 C434.3728,491.741 434.3728,494.604 434.3728,494.604 M463.0164,480.289 C463.0164,480.289 463.0164,474.563 463.0164,474.563 C463.0164,473.776 462.3719,473.132 461.5842,473.132 C460.7965,473.132 460.152,473.776 460.152,474.563 C460.152,474.563 460.152,480.289 460.152,480.289 C460.152,480.289 457.2877,480.289 457.2877,480.289 C457.2877,480.289 457.2877,488.878 457.2877,488.878 C457.2877,488.878 465.8807,488.878 465.8807,488.878 C465.8807,488.878 465.8807,480.289 465.8807,480.289 C465.8807,480.289 463.0164,480.289 463.0164,480.289 M451.5589,474.563 C451.5589,473.776 450.9145,473.132 450.1268,473.132 C449.3391,473.132 448.6946,473.776 448.6946,474.563 C448.6946,474.563 448.6946,480.289 448.6946,480.289 C448.6946,480.289 445.8302,480.289 445.8302,480.289 C445.8302,480.289 445.8302,488.878 445.8302,488.878 C445.8302,488.878 454.4233,488.878 454.4233,488.878 C454.4233,488.878 454.4233,480.289 454.4233,480.289 C454.4233,480.289 451.5589,480.289 451.5589,480.289 C451.5589,480.289 451.5589,474.563 451.5589,474.563 M457.2877,494.604 C457.2877,496.464 458.4907,498.039 460.152,498.64 C460.152,498.64 460.152,504.6238 460.152,504.6238 C460.152,504.6238 463.0164,504.6238 463.0164,504.6238 C463.0164,504.6238 463.0164,498.64 463.0164,498.64 C464.6777,498.053 465.8807,496.479 465.8807,494.604 C465.8807,494.604 465.8807,491.741 465.8807,491.741 C465.8807,491.741 457.2877,491.741 457.2877,491.741 C457.2877,491.741 457.2877,494.604 457.2877,494.604" id="Fill-48"></path></g></g></g></svg>
          </div>
          <label class="cursor:pointer">Digital Infrastructure</label>
        </div>
        <div class="box cursor:pointer" @click="byCategory(ENTREPRENEURS_AND_MSMES)" :class="{'selected': ENTREPRENEURS_AND_MSMES === category}">
          <div>
            <svg width="22px" height="32px" viewBox="0 0 22 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.749"><g id="G20_-_Digital_Society_Platform" transform="translate(-569.000000, -473.000000)" fill="#01BABD"><g id="Group-51"><path d="M584.2708,482.313 C584.2708,482.497 584.2044,482.655 584.0716,482.787 C583.9388,482.92 583.7856,482.981 583.612,482.971 C583.4383,482.961 583.2851,482.9 583.1523,482.787 C583.0195,482.675 582.9532,482.517 582.9532,482.313 C582.9532,481.691 582.5854,481.206 581.85,480.859 C581.1146,480.512 580.3894,480.344 579.6745,480.354 C579.4906,480.354 579.3374,480.288 579.2148,480.155 C579.0923,480.023 579.0259,479.87 579.0157,479.696 C579.0055,479.523 579.0718,479.37 579.2148,479.237 C579.3578,479.105 579.511,479.038 579.6745,479.038 C580.3588,479.038 581.038,479.151 581.7122,479.375 C582.3863,479.599 582.9787,479.967 583.4894,480.477 C584.0001,480.987 584.2605,481.599 584.2708,482.313 M587.5494,482.313 C587.5494,481.334 587.3145,480.421 586.8447,479.574 C586.3748,478.727 585.7569,478.034 584.9908,477.493 C584.2248,476.952 583.3872,476.529 582.4782,476.223 C581.5692,475.917 580.6346,475.764 579.6745,475.764 C578.7144,475.764 577.7798,475.917 576.8707,476.223 C575.9617,476.529 575.119,476.952 574.3428,477.493 C573.5665,478.034 572.9537,478.727 572.5043,479.574 C572.0549,480.421 571.8148,481.334 571.7842,482.313 C571.7842,483.7 572.254,484.93 573.1937,486.001 C573.3265,486.154 573.5308,486.383 573.8066,486.69 C574.0823,486.996 574.2917,487.22 574.4347,487.363 C576.1915,489.454 577.1567,491.489 577.3304,493.468 C577.3304,493.468 582.0033,493.468 582.0033,493.468 C582.1871,491.489 583.1523,489.454 584.8989,487.363 C585.0419,487.21 585.2513,486.985 585.5271,486.69 C585.8028,486.394 586.0122,486.164 586.1552,486.001 C587.0847,484.93 587.5494,483.7 587.5494,482.313 M590.1693,482.313 C590.1693,484.435 589.4645,486.266 588.055,487.807 C587.4422,488.48 586.9366,489.077 586.5382,489.597 C586.1399,490.117 585.7313,490.77 585.3126,491.556 C584.8938,492.341 584.6589,493.076 584.6078,493.759 C585.2513,494.137 585.573,494.698 585.573,495.442 C585.573,495.942 585.4045,496.376 585.0674,496.743 C585.4045,497.11 585.573,497.549 585.573,498.059 C585.573,498.773 585.2666,499.324 584.6538,499.712 C584.8376,500.028 584.9296,500.3494 584.9296,500.6758 C584.9296,501.3083 584.71,501.798 584.2708,502.1448 C583.8316,502.4917 583.3055,502.66 582.6927,502.6498 C582.4169,503.2517 582.0033,503.7312 581.4517,504.0882 C580.9001,504.4453 580.3077,504.6238 579.6745,504.6238 C579.0412,504.6238 578.4437,504.4453 577.8819,504.0882 C577.3202,503.7312 576.9116,503.2517 576.6562,502.6498 C576.023,502.6498 575.4919,502.4815 575.0629,502.1448 C574.6339,501.8082 574.4194,501.3185 574.4194,500.6758 C574.4194,500.3494 574.5062,500.028 574.6798,499.712 C574.067,499.324 573.7606,498.773 573.7606,498.059 C573.7606,497.549 573.9291,497.11 574.2662,496.743 C573.9291,496.376 573.7606,495.942 573.7606,495.442 C573.7606,494.698 574.0823,494.137 574.7258,493.759 C574.6747,493.076 574.4398,492.341 574.021,491.556 C573.6023,490.77 573.1988,490.117 572.8107,489.597 C572.4226,489.077 571.9119,488.48 571.2786,487.807 C569.8691,486.266 569.1643,484.435 569.1643,482.313 C569.1643,480.966 569.4707,479.707 570.0836,478.533 C570.6964,477.36 571.4931,476.391 572.4736,475.626 C573.4542,474.861 574.5777,474.254 575.8442,473.805 C577.1108,473.356 578.3875,473.132 579.6745,473.132 C580.9614,473.132 582.2331,473.356 583.4894,473.805 C584.7457,474.254 585.8692,474.861 586.86,475.626 C587.8507,476.391 588.6525,477.36 589.2654,478.533 C589.8782,479.707 590.1795,480.966 590.1693,482.313" id="Fill-49"></path></g></g></g></svg>
          </div>
          <label class="cursor:pointer">Entrepreneurs and MSMEs</label>
        </div>
        <div class="box cursor:pointer" @click="byCategory(DIGITAL_INCLUSION)" :class="{'selected': DIGITAL_INCLUSION === category}">
          <div>
            <svg width="23px" height="32px" viewBox="0 0 23 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.749"><g id="G20_-_Digital_Society_Platform" transform="translate(-699.000000, -473.000000)" fill="#87C979"><g id="Group-51"><path d="M710.3046,473.132 C704.3063,473.132 699.4269,478.076 699.4269,484.154 C699.4269,492.421 710.3046,504.6238 710.3046,504.6238 C710.3046,504.6238 721.1823,492.421 721.1823,484.154 C721.1823,478.076 716.3029,473.132 710.3046,473.132 M710.3046,476.281 C712.6971,476.281 714.1924,478.905 712.9961,481.005 C712.441,481.979 711.415,482.579 710.3046,482.579 C707.9121,482.579 706.4168,479.955 707.6131,477.855 C708.1682,476.881 709.1942,476.281 710.3046,476.281 M710.3046,492.027 C707.7095,492.027 705.4252,490.689 704.0888,488.642 C704.1198,486.563 708.2378,485.414 710.3046,485.414 C712.3714,485.414 716.4894,486.563 716.5204,488.642 C715.1436,490.759 712.8071,492.031 710.3046,492.027" id="Fill-50"></path></g></g></g></svg>
          </div>
          <label class="cursor:pointer">Digital Inclusion</label>
        </div>
        <div class="box cursor:pointer" @click="byCategory(EMERGING_TECHNOLOGIES)" :class="{'selected': EMERGING_TECHNOLOGIES === category}">
          <div>
            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.749"><g id="G20_-_Digital_Society_Platform" transform="translate(-824.000000, -473.000000)" fill="#F7A13E"><g id="Group-83" transform="translate(812.000000, 473.000000)"><path d="M40.3401,0.132 C40.3401,0.132 15.834,0.132 15.834,0.132 C13.9085,0.132 12.3331,1.706 12.3331,3.631 C12.3331,3.631 12.3331,28.1247 12.3331,28.1247 C12.3331,30.0492 13.9085,31.6238 15.834,31.6238 C15.834,31.6238 40.3401,31.6238 40.3401,31.6238 C42.2656,31.6238 43.841,30.0492 43.841,28.1247 C43.841,28.1247 43.841,3.631 43.841,3.631 C43.841,1.706 42.2656,0.132 40.3401,0.132 M22.8358,24.626 C22.8358,24.626 19.3349,24.626 19.3349,24.626 C19.3349,24.626 19.3349,12.379 19.3349,12.379 C19.3349,12.379 22.8358,12.379 22.8358,12.379 C22.8358,12.379 22.8358,24.626 22.8358,24.626 M29.8375,24.626 C29.8375,24.626 26.3366,24.626 26.3366,24.626 C26.3366,24.626 26.3366,7.13 26.3366,7.13 C26.3366,7.13 29.8375,7.13 29.8375,7.13 C29.8375,7.13 29.8375,24.626 29.8375,24.626 M36.8393,24.626 C36.8393,24.626 33.3384,24.626 33.3384,24.626 C33.3384,24.626 33.3384,17.627 33.3384,17.627 C33.3384,17.627 36.8393,17.627 36.8393,17.627 C36.8393,17.627 36.8393,24.626 36.8393,24.626" id="Fill-82"></path></g></g></g></svg>
          </div>
          <label class="cursor:pointer">Emerging Technologies</label>
        </div>
      </div>
    </div>

    <!-- Search -->
    <div id="filters-categories" class="flex row align:start mar-y:3">
      <div class="fit mar-rig:3">
        <div class="mar-bot:1">
          <h4>Title</h4>
        </div>
        <input v-model="title" type="text" name="title" class="field" placeholder="Project title">
      </div>
      <div class="fit mar-rig:3">
        <div class="mar-bot:1">
          <h4>Tags</h4>
        </div>
        <multiselect
          v-model="tags"
          :options="options"
          :multiple="true"
          group-values="tags"
          group-label="category"
          :group-select="false"
          placeholder="Project topics, tags"
          selectLabel=""
          deselectLabel=""
        />
      </div>
      <div class="fit mar-rig:3">
        <div class="mar-bot:1">
          <h4>Country</h4>
        </div>
        <multiselect
          v-model="country"
          :options="countries"
          :multiple="true"
          placeholder="Origin country"
          selectLabel=""
          deselectLabel=""
        >
          <template slot="singleLabel" slot-scope="props">
            <div class="flex row align:start">
              <img v-if="props.option !== OTHER" class="option__image flag-country mar-rig:1" :src="`/assets/images/flags/${props.option.toLowerCase()}.png`">
              <span class="option__desc"><span class="option__title">{{ props.option }}</span></span>
            </div>
          </template>
          <template slot="option" slot-scope="props">
            <div class="flex row align:center">
              <img v-if="props.option !== OTHER" class="option__image flag-country mar-rig:1" :src="`/assets/images/flags/${props.option.toLowerCase()}.png`">
              <span class="option__desc"><span class="option__title">{{ props.option }}</span></span>
            </div>
          </template>
        </multiselect>
      </div>
      <div class="pad-top:5">
        <button @click="search">SEARCH</button>
      </div>
    </div>

    <!-- Projects list -->
    <paginate
      name="projects"
      ref="paginator"
      :list="filtered"
      :per="5"
      tag="div"
      style="overflow-x: auto;">
      <div v-if="filtered.length" id="projects">
        <table style="width: 100%;text-align: left;min-width: 870px;" cellspanig="0" cellpadding="0">
          <tr>
            <th class="width:225">
              <span @click="sort(COLUMNS.COUNTRY)" class="cursor:pointer">
                <h4>Country</h4>
                <svg v-if="sortKey == COLUMNS.COUNTRY && sortDir == SORT_DIRECTIONS.ASC" class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-671.000000, -704.000000)" fill="#000000"><g id="Group-440"><g id="Group" transform="translate(676.000000, 712.000000) scale(1, -1) translate(-676.000000, -712.000000) translate(671.000000, 704.000000)"><path d="M9.4202,10.4062 C9.4202,10.5648 9.3654,10.7008 9.256,10.8141 C9.256,10.8141 5.3163,14.8934 5.3163,14.8934 C5.2069,15.0112 5.0755,15.0702 4.9223,15.0702 C4.7691,15.0702 4.6356,15.0112 4.5218,14.8934 C4.5218,14.8934 0.5821,10.8141 0.5821,10.8141 C0.4726,10.7008 0.4179,10.5648 0.4179,10.4062 C0.4179,10.2475 0.4726,10.1116 0.5821,9.9982 C0.6915,9.8849 0.825,9.826 0.9826,9.8215 C0.9826,9.8215 8.862,9.8215 8.862,9.8215 C9.0152,9.8215 9.1466,9.8804 9.256,9.9982 C9.3654,10.1161 9.4202,10.2521 9.4202,10.4062" id="Fill-433"></path><path d="M0.4178,5.4878 C0.4178,5.3291 0.4726,5.1931 0.582,5.0798 C0.582,5.0798 4.5217,1.0005 4.5217,1.0005 C4.6312,0.8827 4.7625,0.8238 4.9157,0.8238 C5.0689,0.8238 5.2024,0.8827 5.3162,1.0005 C5.3162,1.0005 9.2559,5.0798 9.2559,5.0798 C9.3654,5.1931 9.4201,5.3291 9.4201,5.4878 C9.4201,5.6464 9.3654,5.7824 9.2559,5.8957 C9.1465,6.009 9.013,6.0679 8.8554,6.0725 C8.8554,6.0725 0.976,6.0725 0.976,6.0725 C0.8228,6.0725 0.6914,6.0135 0.582,5.8957 C0.4726,5.7778 0.4178,5.6419 0.4178,5.4878" id="Fill-434" fill-opacity="0.498"></path></g></g></g></g></svg>
                <svg v-else class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-196.000000, -704.000000)" fill="#000000"><g id="Group-137" transform="translate(196.000000, 704.000000)"><g id="Group"><path d="M9.5514,10.4062 C9.5514,10.5648 9.4967,10.7008 9.3872,10.8141 C9.3872,10.8141 5.4475,14.8934 5.4475,14.8934 C5.3381,15.0112 5.2068,15.0702 5.0536,15.0702 C4.9003,15.0702 4.7668,15.0112 4.653,14.8934 C4.653,14.8934 0.7133,10.8141 0.7133,10.8141 C0.6039,10.7008 0.5492,10.5648 0.5492,10.4062 C0.5492,10.2475 0.6039,10.1116 0.7133,9.9982 C0.8227,9.8849 0.9563,9.826 1.1138,9.8215 C1.1138,9.8215 8.9933,9.8215 8.9933,9.8215 C9.1465,9.8215 9.2778,9.8804 9.3872,9.9982 C9.4967,10.1161 9.5514,10.2521 9.5514,10.4062" id="Fill-135"></path><path d="M0.5491,5.4878 C0.5491,5.3291 0.6039,5.1931 0.7133,5.0798 C0.7133,5.0798 4.653,1.0005 4.653,1.0005 C4.7624,0.8827 4.8938,0.8238 5.047,0.8238 C5.2002,0.8238 5.3337,0.8827 5.4475,1.0005 C5.4475,1.0005 9.3872,5.0798 9.3872,5.0798 C9.4967,5.1931 9.5514,5.3291 9.5514,5.4878 C9.5514,5.6464 9.4967,5.7824 9.3872,5.8957 C9.2778,6.009 9.1443,6.0679 8.9867,6.0725 C8.9867,6.0725 1.1073,6.0725 1.1073,6.0725 C0.9541,6.0725 0.8227,6.0135 0.7133,5.8957 C0.6039,5.7778 0.5491,5.6419 0.5491,5.4878" id="Fill-136" fill-opacity="0.498"></path></g></g></g></g></svg>
              </span>
            </th>
            <th class="width:375">
              <span @click="sort(COLUMNS.NAME)" class="cursor:pointer">
                <h4>Title</h4>
                <svg v-if="sortKey == COLUMNS.NAME && sortDir == SORT_DIRECTIONS.ASC" class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-671.000000, -704.000000)" fill="#000000"><g id="Group-440"><g id="Group" transform="translate(676.000000, 712.000000) scale(1, -1) translate(-676.000000, -712.000000) translate(671.000000, 704.000000)"><path d="M9.4202,10.4062 C9.4202,10.5648 9.3654,10.7008 9.256,10.8141 C9.256,10.8141 5.3163,14.8934 5.3163,14.8934 C5.2069,15.0112 5.0755,15.0702 4.9223,15.0702 C4.7691,15.0702 4.6356,15.0112 4.5218,14.8934 C4.5218,14.8934 0.5821,10.8141 0.5821,10.8141 C0.4726,10.7008 0.4179,10.5648 0.4179,10.4062 C0.4179,10.2475 0.4726,10.1116 0.5821,9.9982 C0.6915,9.8849 0.825,9.826 0.9826,9.8215 C0.9826,9.8215 8.862,9.8215 8.862,9.8215 C9.0152,9.8215 9.1466,9.8804 9.256,9.9982 C9.3654,10.1161 9.4202,10.2521 9.4202,10.4062" id="Fill-433"></path><path d="M0.4178,5.4878 C0.4178,5.3291 0.4726,5.1931 0.582,5.0798 C0.582,5.0798 4.5217,1.0005 4.5217,1.0005 C4.6312,0.8827 4.7625,0.8238 4.9157,0.8238 C5.0689,0.8238 5.2024,0.8827 5.3162,1.0005 C5.3162,1.0005 9.2559,5.0798 9.2559,5.0798 C9.3654,5.1931 9.4201,5.3291 9.4201,5.4878 C9.4201,5.6464 9.3654,5.7824 9.2559,5.8957 C9.1465,6.009 9.013,6.0679 8.8554,6.0725 C8.8554,6.0725 0.976,6.0725 0.976,6.0725 C0.8228,6.0725 0.6914,6.0135 0.582,5.8957 C0.4726,5.7778 0.4178,5.6419 0.4178,5.4878" id="Fill-434" fill-opacity="0.498"></path></g></g></g></g></svg>
                <svg v-else class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-196.000000, -704.000000)" fill="#000000"><g id="Group-137" transform="translate(196.000000, 704.000000)"><g id="Group"><path d="M9.5514,10.4062 C9.5514,10.5648 9.4967,10.7008 9.3872,10.8141 C9.3872,10.8141 5.4475,14.8934 5.4475,14.8934 C5.3381,15.0112 5.2068,15.0702 5.0536,15.0702 C4.9003,15.0702 4.7668,15.0112 4.653,14.8934 C4.653,14.8934 0.7133,10.8141 0.7133,10.8141 C0.6039,10.7008 0.5492,10.5648 0.5492,10.4062 C0.5492,10.2475 0.6039,10.1116 0.7133,9.9982 C0.8227,9.8849 0.9563,9.826 1.1138,9.8215 C1.1138,9.8215 8.9933,9.8215 8.9933,9.8215 C9.1465,9.8215 9.2778,9.8804 9.3872,9.9982 C9.4967,10.1161 9.5514,10.2521 9.5514,10.4062" id="Fill-135"></path><path d="M0.5491,5.4878 C0.5491,5.3291 0.6039,5.1931 0.7133,5.0798 C0.7133,5.0798 4.653,1.0005 4.653,1.0005 C4.7624,0.8827 4.8938,0.8238 5.047,0.8238 C5.2002,0.8238 5.3337,0.8827 5.4475,1.0005 C5.4475,1.0005 9.3872,5.0798 9.3872,5.0798 C9.4967,5.1931 9.5514,5.3291 9.5514,5.4878 C9.5514,5.6464 9.4967,5.7824 9.3872,5.8957 C9.2778,6.009 9.1443,6.0679 8.9867,6.0725 C8.9867,6.0725 1.1073,6.0725 1.1073,6.0725 C0.9541,6.0725 0.8227,6.0135 0.7133,5.8957 C0.6039,5.7778 0.5491,5.6419 0.5491,5.4878" id="Fill-136" fill-opacity="0.498"></path></g></g></g></g></svg>
              </span>
            </th>
            <th class="width:250">
              <span @click="sort(COLUMNS.CATEGORY)" class="cursor:pointer">
                <h4>Category</h4>
                <svg v-if="sortKey == COLUMNS.CATEGORY && sortDir == SORT_DIRECTIONS.ASC" class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-671.000000, -704.000000)" fill="#000000"><g id="Group-440"><g id="Group" transform="translate(676.000000, 712.000000) scale(1, -1) translate(-676.000000, -712.000000) translate(671.000000, 704.000000)"><path d="M9.4202,10.4062 C9.4202,10.5648 9.3654,10.7008 9.256,10.8141 C9.256,10.8141 5.3163,14.8934 5.3163,14.8934 C5.2069,15.0112 5.0755,15.0702 4.9223,15.0702 C4.7691,15.0702 4.6356,15.0112 4.5218,14.8934 C4.5218,14.8934 0.5821,10.8141 0.5821,10.8141 C0.4726,10.7008 0.4179,10.5648 0.4179,10.4062 C0.4179,10.2475 0.4726,10.1116 0.5821,9.9982 C0.6915,9.8849 0.825,9.826 0.9826,9.8215 C0.9826,9.8215 8.862,9.8215 8.862,9.8215 C9.0152,9.8215 9.1466,9.8804 9.256,9.9982 C9.3654,10.1161 9.4202,10.2521 9.4202,10.4062" id="Fill-433"></path><path d="M0.4178,5.4878 C0.4178,5.3291 0.4726,5.1931 0.582,5.0798 C0.582,5.0798 4.5217,1.0005 4.5217,1.0005 C4.6312,0.8827 4.7625,0.8238 4.9157,0.8238 C5.0689,0.8238 5.2024,0.8827 5.3162,1.0005 C5.3162,1.0005 9.2559,5.0798 9.2559,5.0798 C9.3654,5.1931 9.4201,5.3291 9.4201,5.4878 C9.4201,5.6464 9.3654,5.7824 9.2559,5.8957 C9.1465,6.009 9.013,6.0679 8.8554,6.0725 C8.8554,6.0725 0.976,6.0725 0.976,6.0725 C0.8228,6.0725 0.6914,6.0135 0.582,5.8957 C0.4726,5.7778 0.4178,5.6419 0.4178,5.4878" id="Fill-434" fill-opacity="0.498"></path></g></g></g></g></svg>
                <svg v-else class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-196.000000, -704.000000)" fill="#000000"><g id="Group-137" transform="translate(196.000000, 704.000000)"><g id="Group"><path d="M9.5514,10.4062 C9.5514,10.5648 9.4967,10.7008 9.3872,10.8141 C9.3872,10.8141 5.4475,14.8934 5.4475,14.8934 C5.3381,15.0112 5.2068,15.0702 5.0536,15.0702 C4.9003,15.0702 4.7668,15.0112 4.653,14.8934 C4.653,14.8934 0.7133,10.8141 0.7133,10.8141 C0.6039,10.7008 0.5492,10.5648 0.5492,10.4062 C0.5492,10.2475 0.6039,10.1116 0.7133,9.9982 C0.8227,9.8849 0.9563,9.826 1.1138,9.8215 C1.1138,9.8215 8.9933,9.8215 8.9933,9.8215 C9.1465,9.8215 9.2778,9.8804 9.3872,9.9982 C9.4967,10.1161 9.5514,10.2521 9.5514,10.4062" id="Fill-135"></path><path d="M0.5491,5.4878 C0.5491,5.3291 0.6039,5.1931 0.7133,5.0798 C0.7133,5.0798 4.653,1.0005 4.653,1.0005 C4.7624,0.8827 4.8938,0.8238 5.047,0.8238 C5.2002,0.8238 5.3337,0.8827 5.4475,1.0005 C5.4475,1.0005 9.3872,5.0798 9.3872,5.0798 C9.4967,5.1931 9.5514,5.3291 9.5514,5.4878 C9.5514,5.6464 9.4967,5.7824 9.3872,5.8957 C9.2778,6.009 9.1443,6.0679 8.9867,6.0725 C8.9867,6.0725 1.1073,6.0725 1.1073,6.0725 C0.9541,6.0725 0.8227,6.0135 0.7133,5.8957 C0.6039,5.7778 0.5491,5.6419 0.5491,5.4878" id="Fill-136" fill-opacity="0.498"></path></g></g></g></g></svg>
              </span>
            </th>
            <th class="width:150">
              <span @click="sort(COLUMNS.UPDATED)" class="cursor:pointer">
                <h4>Last update</h4>
                <svg v-if="sortKey == COLUMNS.UPDATED && sortDir == SORT_DIRECTIONS.ASC" class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-671.000000, -704.000000)" fill="#000000"><g id="Group-440"><g id="Group" transform="translate(676.000000, 712.000000) scale(1, -1) translate(-676.000000, -712.000000) translate(671.000000, 704.000000)"><path d="M9.4202,10.4062 C9.4202,10.5648 9.3654,10.7008 9.256,10.8141 C9.256,10.8141 5.3163,14.8934 5.3163,14.8934 C5.2069,15.0112 5.0755,15.0702 4.9223,15.0702 C4.7691,15.0702 4.6356,15.0112 4.5218,14.8934 C4.5218,14.8934 0.5821,10.8141 0.5821,10.8141 C0.4726,10.7008 0.4179,10.5648 0.4179,10.4062 C0.4179,10.2475 0.4726,10.1116 0.5821,9.9982 C0.6915,9.8849 0.825,9.826 0.9826,9.8215 C0.9826,9.8215 8.862,9.8215 8.862,9.8215 C9.0152,9.8215 9.1466,9.8804 9.256,9.9982 C9.3654,10.1161 9.4202,10.2521 9.4202,10.4062" id="Fill-433"></path><path d="M0.4178,5.4878 C0.4178,5.3291 0.4726,5.1931 0.582,5.0798 C0.582,5.0798 4.5217,1.0005 4.5217,1.0005 C4.6312,0.8827 4.7625,0.8238 4.9157,0.8238 C5.0689,0.8238 5.2024,0.8827 5.3162,1.0005 C5.3162,1.0005 9.2559,5.0798 9.2559,5.0798 C9.3654,5.1931 9.4201,5.3291 9.4201,5.4878 C9.4201,5.6464 9.3654,5.7824 9.2559,5.8957 C9.1465,6.009 9.013,6.0679 8.8554,6.0725 C8.8554,6.0725 0.976,6.0725 0.976,6.0725 C0.8228,6.0725 0.6914,6.0135 0.582,5.8957 C0.4726,5.7778 0.4178,5.6419 0.4178,5.4878" id="Fill-434" fill-opacity="0.498"></path></g></g></g></g></svg>
                <svg v-else class="mar-lef:1" width="10px" height="16px" viewBox="0 0 10 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-196.000000, -704.000000)" fill="#000000"><g id="Group-137" transform="translate(196.000000, 704.000000)"><g id="Group"><path d="M9.5514,10.4062 C9.5514,10.5648 9.4967,10.7008 9.3872,10.8141 C9.3872,10.8141 5.4475,14.8934 5.4475,14.8934 C5.3381,15.0112 5.2068,15.0702 5.0536,15.0702 C4.9003,15.0702 4.7668,15.0112 4.653,14.8934 C4.653,14.8934 0.7133,10.8141 0.7133,10.8141 C0.6039,10.7008 0.5492,10.5648 0.5492,10.4062 C0.5492,10.2475 0.6039,10.1116 0.7133,9.9982 C0.8227,9.8849 0.9563,9.826 1.1138,9.8215 C1.1138,9.8215 8.9933,9.8215 8.9933,9.8215 C9.1465,9.8215 9.2778,9.8804 9.3872,9.9982 C9.4967,10.1161 9.5514,10.2521 9.5514,10.4062" id="Fill-135"></path><path d="M0.5491,5.4878 C0.5491,5.3291 0.6039,5.1931 0.7133,5.0798 C0.7133,5.0798 4.653,1.0005 4.653,1.0005 C4.7624,0.8827 4.8938,0.8238 5.047,0.8238 C5.2002,0.8238 5.3337,0.8827 5.4475,1.0005 C5.4475,1.0005 9.3872,5.0798 9.3872,5.0798 C9.4967,5.1931 9.5514,5.3291 9.5514,5.4878 C9.5514,5.6464 9.4967,5.7824 9.3872,5.8957 C9.2778,6.009 9.1443,6.0679 8.9867,6.0725 C8.9867,6.0725 1.1073,6.0725 1.1073,6.0725 C0.9541,6.0725 0.8227,6.0135 0.7133,5.8957 C0.6039,5.7778 0.5491,5.6419 0.5491,5.4878" id="Fill-136" fill-opacity="0.498"></path></g></g></g></g></svg>
              </span>
            </th>
          </tr>
          <tr v-for="(project, key) in paginated('projects')" :key="key" valign="top">
            <td>
              <div class="flex row align:center mar-rig:1">
                <span>
                  <img :src="`/assets/images/flags/${project.country.toLowerCase()}.png`" class="mar-rig:2 flag-country">
                </span>
                {{ project.country }}
              </div>
            </td>
            <td>
              <div class="mar-rig:1">
                <div class="mar-bot:1">
                  <a @click="selected = project" class="cursor:pointer decoration:underline" style="color: #00A4D3">{{ project.name }}</a>
                </div>
                <div>
                  <svg width="16px" height="16px" class="mar-rig:1" viewBox="0 0 12 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="G20_-_Digital_Society_Platform" transform="translate(-292.000000, -773.000000)" fill="#873299"><g id="Group-211" transform="translate(292.000000, 773.000000)"><path d="M3.679,2.2761 C3.679,2.0313 3.5927,1.8226 3.4202,1.6501 C3.2477,1.4777 3.0389,1.3914 2.7939,1.3914 C2.5489,1.3914 2.3384,1.4777 2.1624,1.6501 C1.9864,1.8226 1.9001,2.0313 1.9036,2.2761 C1.907,2.521 1.9933,2.7297 2.1624,2.9022 C2.3315,3.0746 2.542,3.1608 2.7939,3.1608 C3.0458,3.1608 3.2546,3.0746 3.4202,2.9022 C3.5858,2.7297 3.6721,2.521 3.679,2.2761 M11.0758,6.265 C11.0758,6.5099 10.9895,6.7186 10.817,6.8911 C10.817,6.8911 7.4162,10.3005 7.4162,10.3005 C7.2368,10.4695 7.0263,10.554 6.7847,10.554 C6.5397,10.554 6.3309,10.4695 6.1584,10.3005 C6.1584,10.3005 1.2048,5.339 1.2048,5.339 C1.0288,5.1665 0.8787,4.9337 0.7545,4.6405 C0.6302,4.3473 0.5698,4.0766 0.5733,3.8282 C0.5733,3.8282 0.5733,0.9465 0.5733,0.9465 C0.5733,0.7051 0.6613,0.4964 0.8373,0.3205 C1.0133,0.1446 1.2203,0.0566 1.4584,0.0566 C1.4584,0.0566 4.3467,0.0566 4.3467,0.0566 C4.5917,0.0566 4.8609,0.1187 5.1542,0.2429 C5.4475,0.3671 5.6839,0.5154 5.8634,0.6878 C5.8634,0.6878 10.817,5.639 10.817,5.639 C10.9895,5.8184 11.0758,6.0271 11.0758,6.265" id="Fill-208"></path></g></g></g></svg>
                  <div v-for="(tag, key) of project.tags" :key="key" class="tag">{{ tag }}</div>
                </div>
              </div>
            </td>
            <td>
              <div class="mar-rig:1">
                {{ project.category }}
              </div>
            </td>
            <td>{{ moment(project.updated, 'DD/MM/YYYY').format('DD/MM/YY') }}</td>
          </tr>
        </table>
      </div>
      <div v-else class="text:center mar-top:10">
        <svg width="90px" height="80px" viewBox="0 0 90 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M88.1,66.1 L53.1,4.6 C51.5,1.7 48.5,0 45,0 C41.5,0 38.6,1.7 36.9,4.6 L1.9,66.1 C0.3,69 0.3,72.5 1.9,75.4 C3.5,78.3 6.5,80 9.9,80 L79.8,80 C83.2,80 86.2,78.3 87.8,75.4 C89.7,72.5 89.7,69 88.1,66.1 Z M50.9283171,65.2612524 L39.7,65.2612524 L39.7,55 L50.9283171,55 L50.9283171,65.2612524 Z M50.9283171,49.3902539 L39.7,49.3902539 L39.7,20 L50.9283171,20 L50.9283171,49.3902539 Z" id="Shape" fill="#F7931E" fill-rule="nonzero"></path></g></svg>
        <h2>No projects found</h2>
        <p>There are no projects with this search criteria.<br/>Please try a new one.</p>
      </div>
    </paginate>
    <paginate-links
      v-show="filtered.length"
      :show-step-links="true"
      for="projects"
      :async="true"
      :limit="5"
    />
  </div>
</template>

<script>
// import data from '../../_site/data.json'
import multiselect from 'vue-multiselect'
import _ from 'lodash'
import modal from './modal.vue'
import moment from 'moment'
import axios from 'axios'
import {
  OTHER,

  // cateogries
  SKILLS_FOR_THE_FUTURE_OF_WORK,
  DIGITAL_GOVERNMENT,
  DIGITAL_INFRASTRUCTURE,
  ENTREPRENEURS_AND_MSMES,
  DIGITAL_INCLUSION,
  EMERGING_TECHNOLOGIES,

  // columns
  COLUMNS,
  SORT_DIRECTIONS
} from '../config'

export default {
  components: {
    multiselect,
    modal
  },
  data () {
    return {
      OTHER,
      SKILLS_FOR_THE_FUTURE_OF_WORK,
      DIGITAL_GOVERNMENT,
      DIGITAL_INFRASTRUCTURE,
      ENTREPRENEURS_AND_MSMES,
      DIGITAL_INCLUSION,
      EMERGING_TECHNOLOGIES,
      COLUMNS,
      SORT_DIRECTIONS,

      selected: null,
      paginate: ['projects'],
      data: [],
      filtered: [],
      tags: [],
      taxonomies: {
        [SKILLS_FOR_THE_FUTURE_OF_WORK]: [
          {
            category: 'Types of Skills',
            tags: [
              'Numeracy',
              'Literacy',
              'Socioemotional skills',
              'Entrepreneurial skills',
              'Digital skills',
              'Job-specific Skills / Technical Skills',
              'Green Skills',
              'STEM',
              'Other'
            ]
          },
          {
            category: 'Priority Sector',
            tags: [
              'Manufacturing',
              'Infraestructure',
              'Agriculture'
            ]
          },
          {
            category: 'Skills Programmes',
            tags: [
              'Formal Education and Training',
              'Early Childhood Education',
              'Primary / Elementary Education',
              'Lower and Upper Secondary Education',
              'Technical Vocational Education and Training (TVET)',
              'Higher Education',
              'Post secondary non-tertiary education',
              'Short-cycle tertiary education',
              'Apprenticeships (formal certificates provided by employers)',
              'Adult Learning and Training',
              'Teacher Training',
            ]
          },
          {
            category: 'Non formal education',
            tags: [
              'Children',
              'Youth',
              'Adults',
              'Senior citizens'
            ]
          },
          {
            category: 'Inclusion',
            tags: [
              'Gender',
              'People with Disabilities',
              'People in Confinement',
              'Rural populations',
              'NEET´s',
              'Migrants and Refugees',
              'Indigenous People',
              'Socio-economic disadvantaged backgrounds',
            ]
          },
          {
            category: 'Themes',
            tags: [
              'Governance',
              'Curriculum',
              'Teachers',
              'Funding',
              'Qualifications',
              'Access and Equity',
              'Quality',
              'Relevance'
            ]
          },
        ],
        [DIGITAL_GOVERNMENT]: [
          {
            category: 'Services',
            tags: [
              'ICT project management capabilities',
              'Digital procurement',
              'Procurement of digital technologies',
              'User-driven design for processes, products and services',
              'Multi-channel service delivery',
              'Accessibility',
              'Inclusiveness',
              'Digital Identity',
              'Product / Service delivery',
              'User Experience',
              'User Research',
              'Interoperability'
            ]
          },
          {
            category: 'Data',
            tags: [
              'Openness',
              'Datasets',
              'Data-driven public sector',
              'Participation',
              'Transparency',
              'Data-governance'
            ]
          },
          {
            category: 'Security',
            tags: [
              'Risk management',
              'Privacy protection',
              'Security'
            ]
          },
          {
            category: 'Digital Skills',
            tags: [
              'Digital Skills in the Public Sector',
              'Recruiting tech talents in Public Sector',
              'Digital Inclusion',
              'Digital literacy'
            ]
          },
          {
            category: 'Standards',
            tags: [
              'Legal and regulatory framework',
              'Digital Government Standards'
            ]
          },
          {
            category: 'Strategy',
            tags: [
              'Use of business cases in Digital Government',
              'Monitor and reporting methodology',
              'Improvement in project management',
              'Funding strategy',
              'Implementation strategy'
            ]
          },
          {
            category: 'Evolution',
            tags: [
              'International cooperation',
              'Cross-border interoperability',
              'Emerging technologies',
              'Public - Private cooperation'
            ]
          },
        ],
        [DIGITAL_INFRASTRUCTURE]: [
          {
            category: 'National backbones',
            tags: [
              'International links',
              'National Backbones',
              'IXPs/NAPs (Internet Exchange Points - Network Access Points)',
              'NGN (Next Generation Networks)',
              'Docsys 3.x',
              'Fiber Optics',
              'Cloud-based telecommunications infrastructure'
            ]
          },
          {
            category: 'Broadband Access Technologies',
            tags: [
              'Wireless Links',
              'Satellite Networks',
              'FTTX',
              'HFC (Hybrid Fiber Coaxial)',
              'Wi-Fi',
              'Cellular Networks. 2G 3G 4G 5G SCM',
              'xDSL'
            ]
          },
          {
            category: 'Spectrum',
            tags: [
              'Spectrum Planning and Harmonization',
              'Spectrum Management Systems',
              'Spectrum Monitoring Systems'
            ]
          },
          {
            category: 'Extended services, applications, content and new technologies.',
            tags: [
              'Data Centers (ICREA categories)',
              'New modulation Techniques',
              'Standards & Interoperability:',
              'Basic and Extended Telephone Services',
              'Basic and Extended Internet Services',
              'xAAS',
              'IPv6 Infrastructure',
              'Cloud Computing',
              'Quantum computing',
              'CDN (Content Delivery Network)',
              'eServices',
              'A.I. (Artificial Intelligence)',
              'Blockchain',
              'Big Data and data analytics',
              'IoT (Internet of Things)',
              'ICT Services',
              'Smart cities',
              'Disaster risk management',
              'Co-location facilities'
            ]
          },
        ],
        [ENTREPRENEURS_AND_MSMES]: [
          {
            category: 'TARGET',
            tags: [
              'MSMEs',
              'Entrepreneur'
            ]
          },
          {
            category: 'PUBLIC POLICIES',
            tags: [
              'Financing',
              'Regulatory framework',
              'Ecosystem / community development',
              'Technological equipment',
              'Technical assistance',
              'Development of Digital and entrepreneurial skills',
              'R&D and innovation:',
              'Digital security',
              'Social Impact and Inclusive entrepreneurship',
              'Digital transformation'
            ]
          },
        ],
        [DIGITAL_INCLUSION]: [
          {
            category: 'Gender',
            tags: [
              'Vulnerable population by income',
              'Displaced(eg .: refugees)',
              'Disability',
              'Access to digital technologies/barriers to use',
              'People in Confinement',
              'Rural populations',
              'NEET´s',
              'Migrants and Refugees',
              'Indigenous People'
            ]
          }
        ],
        [EMERGING_TECHNOLOGIES]: [
          {
            category: 'Features',
            tags: [
              'Virtualization',
              'Autonomization',
              'Interoperability',
              'Real-time availability',
              'Flexibility',
              'Service Orientation',
              'Energy efficiency',
              'Smart manufacturing'
            ]
          },
          {
            category: 'Type of technology',
            tags: [
              'Cyber-Physical Systems',
              'Internet of Things/Services',
              'BigData',
              'Artificial Intelligence',
              'Augmented Reality',
              'Virtual Reality',
              'Additive Manufacturing',
              'Cybersecurity'
            ]
          }
        ],
        globals: [
          {
            category: 'Type',
            tags: [
              'Policy',
              'Program',
              'Project',
              'Strategy'
            ]
          },
          {
            category: 'Government level (Implementing the initiative)',
            tags: [
              'National',
              'Sub',
              'City / Metropolitan',
            ]
          },
          {
            category: 'Stakeholders / Beneficiaries',
            tags: [
              'Girls',
              'Youth',
              'Women',
              'Elderly',
              'Disability',
              'Population Rural',
              'Public Employees',
              'Private Sector',
              'NGOs',
              'Refugee',
              'NEET’s',
            ]
          }
        ]
      },
      countries: [
        'Argentina',
        'Australia',
        'Brazil',
        'Canada',
        'China',
        'France',
        'Germany',
        'India',
        'Indonesia',
        'Italy',
        'Japan',
        'Republic of Korea',
        'Mexico',
        'Russian Federation',
        'Saudi Arabia',
        'South Africa',
        'Turkey',
        'United States',
        'European Union',
        OTHER,

        // 'CAF',
        // 'IDB',
        // 'IMF',
        // 'ITU',
        // 'ILO',
        // 'OECD',
        // 'UN',
        // 'WB',
        // 'WTO'
      ],

      // filters
      category: null,
      title: '',
      country: [],

      // sorting
      sortKey: COLUMNS.NAME,
      sortDir: SORT_DIRECTIONS.ASC
    }
  },
  created () {
    axios.get('https://www.itu.int/net4/wsis/stocktaking/en/api/digitalpolicies/get')
      .then(response => {
        const { data } = response.data
        this.data = data
        this.search()
      })
      .catch(err => {
        // endpoint errror
        console.log(err)
      })
  },
  computed: {
    options () {
      // no category selected
      if (!this.category) {
        return _.flattenDeep(Object.values(this.taxonomies))
      }

      return _.union(this.taxonomies[this.category], this.taxonomies.globals)
    }
  },
  methods: {
    moment,
    sort (key) {
      // if key == current sort, reverse
      if (key === this.sortKey) {
        this.sortDir = (this.sortDir === SORT_DIRECTIONS.ASC ? SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC)
      }
      this.sortKey = key

      // sorting by a key?
      let temp = this.filtered
      if (this.sortKey) {
		    let order = (this.sortDir === 'desc') ? -1 : 1
        this.filtered = temp.sort((a, b) => {
          a = a[this.sortKey]
          b = b[this.sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
    },
    clear () {
      this.category = null
      this.selected = null
      this.title = ''
      this.tags = []
      this.country = []
      this.filtered = this.data
      console.log(this.filtered)
    },
    byCategory (category) {
      this.category = category
      this.search()
    },
    search () {
      // all projects
      let temp = this.data

      // apply text filters
      if (this.title || this.tags.length || this.country.length) {
        const match = project => {
          return (
              // match project name?
              (this.title ? project.name.toLowerCase().indexOf(this.title.toLowerCase()) !== -1 : true)

              // or project includes tags?
              && (this.tags.length ? _.intersection(this.tags, project.tags).length > 0 : true)

              // or country is equal to?
              && (this.country.length ? this.country.includes(project.country) : true)
          )
        }

        temp = temp.filter(match)
      }

      // category selected?
      if (this.category) {
        temp = temp.filter(project => project.category.toLowerCase().indexOf(this.category.toLowerCase()) !== -1)
      }

      this.filtered = temp
    }
  }
}
</script>

<style module>
.multiselect--active {
  z-index: 3 !important;
}

.multiselect--active:not(.multiselect--above) > .multiselect__tags {
  border-bottom-right-radius: 0 !important;
  border: 3px solid #01babd !important;
  border-bottom-left-radius: 0 !important;
  border-bottom: 0 !important;
}

.multiselect--active.multiselect--above .multiselect__tags {
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  border: 3px solid #01babd !important;
  border-top: 0 !important;
}

.multiselect--active:not(.multiselect--above) > .multiselect__content-wrapper {
  border: 3px solid #01babd !important;
  border-top: 0 !important;
}

.multiselect--active.multiselect--above > .multiselect__content-wrapper {
  border: 3px solid #01babd !important;
  border-bottom: 0 !important;
}

.multiselect__option--selected {
    background: none !important;
    color: #cccccc !important;
}

.multiselect__option--highlight {
  background: none !important;
  color: #c7c7c7 !important;
}

.multiselect__element {
    border-top: 1px #e8e8e8 solid !important;
}

.multiselect__option--highlight:after {
  background: none !important;
}

.multiselect__select {
  top: 10px !important;
}

.multiselect__tags {
    min-height: 60px !important;
    min-height: 60px !important;
    border-radius: 8px !important;
    padding: 18px 40px 0 8px !important;
    border: 3px solid #01babd !important;
}

.multiselect__select:before {
    color: #000 !important;
    border-width: 7px 7px 0 !important;
    border-color: #000 transparent transparent !important;;
}

.multiselect input {
    outline: none;
    border: 0 !important;
    box-shadow: none !important;
    padding: 0 0 0 5px !important;
}

.multiselect__tag {
  color: #000000 !important;
  background: #e3e5e7 !important;
}

.multiselect__tag-icon:after {
    color: #4d4d4c !important;
}
.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {
    background: none !important;
}

.multiselect__loading-transition {
  transition: opacity 2s ease-in-out !important;
}

input.field, input.field:focus, input.field:active {
  border: 3px #01babd solid;
  width: 100%;
  height: 60px;
  font-size: 15px;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  padding: 0 10px;
}

button, button:active, button:focus {
  outline: none;
  border: 0;
  display: inline-block;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 16px 50px;
  text-transform: uppercase;
  vertical-align: top;
  white-space: initial;
  word-break: initial;
  text-decoration: none;
  background-color: #01babd!important;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 80px;
  height: 50px;
}

.flag-country {
  width: 30px;
  height: 18px;
}

.tag {
  border-radius: 3px;
  background: rgb(235, 235, 235);
  padding: 3px 15px;
  font-size: 14px;
  margin-right: 10px;
  display: inline-block;
  margin-bottom: 10px;
  padding: 1px 15px;
}

.box.selected {
  border-color: #01babd !important;
}
</style>
