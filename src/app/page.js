export default function Home() {
  return (
    <>
        <div className="app-shell" data-profile="graphic" data-route="natal" data-time-zone="Asia/Kolkata">
    <header className="app-header">
      <a className="brand" href="toolkit-v2/index.html" aria-label="AstrologersToolkit home">
        <img className="brand-mark" src="toolkit-v2/blocks/logo.svg" alt="" aria-hidden="true" />
        <span className="company-name">AstrologersToolkit</span>
      </a>

      <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">
        <span></span><span></span><span></span>
      </button>

      <nav className="nav-menu" id="primary-navigation" aria-label="Main navigation">
        <ul className="nav-list">
          <li className="nav-item has-dropdown">
            <a className="nav-link" data-route="prasanam" href="#prasanam">Prasanam <span className="nav-caret" aria-hidden="true"></span></a>
            <ul className="dropdown-menu">
              <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
              <li><a data-route="jamakkol" href="#jamakkol">Jamakkol</a></li>
              <li><a data-route="horary" href="#horary">Horary</a></li>
              <li><a data-route="prasanam-time" href="#prasanam-time">Time</a></li>
              <li><a data-route="kp-prasanam" href="#kp-prasanam">KP</a></li>
            </ul>
          </li>
          <li className="nav-item has-dropdown">
            <a className="nav-link" data-route="natal" href="#natal">Natal <span className="nav-caret" aria-hidden="true"></span></a>
            <ul className="dropdown-menu">
              <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
              <li><a data-route="natal-chart" href="#natal-chart">Natal chart</a></li>
              <li><a data-route="varga-chakra" href="#varga-chakra">Varga Chakra</a></li>
            </ul>
          </li>
          <li className="nav-item has-dropdown">
            <a className="nav-link" data-route="planetary-motion" href="#planetary-motion">Planetary Motion <span className="nav-caret" aria-hidden="true"></span></a>
            <ul className="dropdown-menu">
              <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
              <li><a data-route="motion-day" href="#motion-day">Day</a></li>
              <li><a data-route="motion-year" href="#motion-year">Year</a></li>
              <li><a data-route="declinations" href="#declinations">Declinations graph</a></li>
            </ul>
          </li>
          <li className="nav-item has-dropdown">
            <a className="nav-link" data-route="panchang" href="#panchang">Panchang <span className="nav-caret" aria-hidden="true"></span></a>
            <ul className="dropdown-menu">
              <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
              <li><a data-route="panchang-elements" href="#panchang-elements">Elements</a></li>
              <li><a data-route="pancha-pakshi" href="#pancha-pakshi">Pancha Pakshi</a></li>
              <li><a data-route="gowri" href="#gowri">Gowri</a></li>
              <li><a data-route="hora" href="#hora">Hora</a></li>
            </ul>
          </li>
          <li className="nav-item has-dropdown">
            <a className="nav-link" data-route="transit" href="#transit">Transit <span className="nav-caret" aria-hidden="true"></span></a>
            <ul className="dropdown-menu">
              <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
              <li><a data-route="transit-vs-natal" href="#transit-vs-natal">Transit vs Natal</a></li>
              <li><a data-route="ethirtadai" href="#ethirtadai">Ethirtadai</a></li>
            </ul>
          </li>
          <li className="nav-item more-item has-dropdown">
            <a className="nav-link" data-route="more" href="#more">More <span className="nav-caret" aria-hidden="true"></span></a>
            <ul className="dropdown-menu">
              <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
              <li className="nested-dropdown">
                <a className="sub-link" data-route="calculators" href="#calculators">Calculators <span className="nav-caret" aria-hidden="true"></span></a>
                <ul className="sub-submenu">
                  <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
                  <li className="nested-dropdown">
                    <a className="sub-link" href="#ayurdaya">Ayurdaya <span className="nav-caret" aria-hidden="true"></span></a>
                    <ul className="sub-submenu">
                      <li className="drawer-back-row"><button className="drawer-back" type="button">◀ Back</button></li>
                      <li><a data-route="pindayu" href="#pindayu">Pindayu</a></li>
                      <li><a data-route="amsayu" href="#amsayu">Amsayu</a></li>
                      <li><a data-route="jaimini" href="#jaimini">Jaimini</a></li>
                    </ul>
                  </li>
                  <li><a data-route="kakshaya" href="#kakshaya">Kakshaya</a></li>
                </ul>
              </li>
              <li><a data-route="settings" href="#settings">Settings</a></li>
              <li><a data-route="bnn" href="#bnn">BNN</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <main className="workspace">
      <section className="parameter-deck" aria-label="Calculation parameters">
        <div className="parameter-inputs">
          <div className="date-time-group">
            <div className="weekday-stepper" aria-label="Step date by one day">
              <button type="button" id="stepper-prev" aria-label="Previous day">‹</button>
              <span id="label-weekday">Mon</span>
              <button type="button" id="stepper-next" aria-label="Next day">›</button>
            </div>

            <div className="field-group" aria-label="Date">
              <span className="field-label">Date</span>
              <div className="field-row">
                <div className="custom-scroll-dropdown" id="dropdown-wrapper-day">
                  <button className="dropdown-trigger-bar" id="date-day" type="button" data-value="1" aria-label="Day">01</button>
                  <ul className="dropdown-scroll-list" id="list-day"></ul>
                </div>
                <div className="custom-scroll-dropdown" id="dropdown-wrapper-month">
                  <button className="dropdown-trigger-bar" id="date-month" type="button" data-value="0" aria-label="Month">Jan</button>
                  <ul className="dropdown-scroll-list" id="list-month">
                    <li data-value="0">Jan</li><li data-value="1">Feb</li><li data-value="2">Mar</li>
                    <li data-value="3">Apr</li><li data-value="4">May</li><li data-value="5">Jun</li>
                    <li data-value="6">Jul</li><li data-value="7">Aug</li><li data-value="8">Sep</li>
                    <li data-value="9">Oct</li><li data-value="10">Nov</li><li data-value="11">Dec</li>
                  </ul>
                </div>
                <div className="custom-scroll-dropdown" id="dropdown-wrapper-year">
                  <button className="dropdown-trigger-bar" id="date-year" type="button" data-value="2026" aria-label="Year">2026</button>
                  <ul className="dropdown-scroll-list" id="list-year"></ul>
                </div>
              </div>
            </div>

            <div className="field-group" aria-label="Time">
              <span className="field-label">Time</span>
              <div className="field-row time-fields">
                <div className="custom-scroll-dropdown" id="dropdown-wrapper-hr">
                  <button className="dropdown-trigger-bar" id="time-hr" type="button" data-value="0" aria-label="Hour">00</button>
                  <ul className="dropdown-scroll-list" id="list-hr"></ul>
                </div>
                <span className="console-inner-divider">:</span>
                <div className="custom-scroll-dropdown" id="dropdown-wrapper-min">
                  <button className="dropdown-trigger-bar" id="time-min" type="button" data-value="0" aria-label="Minute">00</button>
                  <ul className="dropdown-scroll-list" id="list-min"></ul>
                </div>
                <span className="console-inner-divider">:</span>
                <div className="custom-scroll-dropdown" id="dropdown-wrapper-sec">
                  <button className="dropdown-trigger-bar" id="time-sec" type="button" data-value="0" aria-label="Second">00</button>
                  <ul className="dropdown-scroll-list" id="list-sec"></ul>
                </div>
              </div>
            </div>
            <button className="icon-button tooltip" id="btn-now" type="button" aria-label="Reset workspace to current time" data-tooltip="Reset workspace to current time">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v5l3 2M21 12a9 9 0 1 1-2.64-6.36M21 4v5h-5"/></svg>
            </button>
          </div>

          <div className="location-group">
            <div className="location-field">
              <label className="field-label" htmlFor="input-location">Location</label>
              <div className="location-input-wrap">
                <input type="text" id="input-location" defaultValue="Mumbai, India" autoComplete="off" aria-label="Location" placeholder="Search location" />
                <ul className="dropdown-scroll-list" id="location-autocomplete-list" aria-label="Location suggestions"></ul>
              </div>
              <button className="icon-button location-pin tooltip" id="btn-geolocation" type="button" aria-label="Detect current live location" data-tooltip="Detect current live location">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              </button>
            </div>
            <div className="location-data">
              <div className="coordinate-fields" aria-label="Location coordinates">
                <span id="coord-lat" data-value="19.08" contentEditable="true" aria-label="Latitude">19.08N</span>
                <span id="coord-lng" data-value="72.88" contentEditable="true" aria-label="Longitude">72.88E</span>
                <span id="coord-tz" data-value="+05:30" contentEditable="true" aria-label="Time zone">+05:30</span>
              </div>
              <p className="timezone-note" id="timezone-history-note" role="status" aria-live="polite" hidden></p>
              <p className="location-status" id="location-status" role="status" aria-live="polite" hidden></p>
            </div>
            <button className="primary-action" id="btn-generate" type="button">Generate</button>
          </div>
        </div>

        <div className="workspace-options" aria-label="Chart options">
          <label className="select-control" data-config="nodes">
            <span>Nodes</span>
            <select id="node-type">
              <option value="true">True nodes</option>
              <option value="mean">Mean nodes</option>
            </select>
          </label>
          <label className="select-control" data-config="style">
            <span>Format</span>
            <select id="chart-style-format" className="smart-console-select">
              <option value="south">South format</option>
              <option value="north">North format</option>
            </select>
          </label>
          <label className="check-control" data-config="upagraha"><input type="checkbox" id="check-upagraha" /> <span>Upagraha</span></label>
        </div>

        <div className="context-controls" aria-label="Section-specific parameters">
          <div className="context-control-group" data-context="kp" aria-label="KP and Horary parameters">
            <label className="select-control" data-config="kp-mode">
              <span>Calculation</span>
              <select id="kp-mode">
                <option value="time">Time</option>
                <option value="horary">Horary</option>
              </select>
            </label>
            <label className="select-control" data-config="horary-number">
              <span>Number</span>
              <input id="kp-number" type="number" min="1" max="249" step="1" defaultValue="1" aria-label="Horary number" />
            </label>
            <label className="select-control" data-config="rotate-lagna">
              <span>Rotate lagna</span>
              <select id="kp-rotate-lagna" aria-label="Rotate lagna">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </label>
            <button className="secondary-action" id="btn-rotate-lagna" type="button">Rotate</button>
          </div>

          <div className="context-control-group" data-context="varga" aria-label="Varga chart parameters">
            <label className="select-control">
              <span>Varga</span>
              <select id="varga-division">
                <option value="D1">D1 — Rasi</option>
                <option value="D2">D2 — Hora</option>
                <option value="D3">D3 — Drekkana</option>
                <option value="D4">D4 — Chaturthamsa</option>
                <option value="D7">D7 — Saptamsa</option>
                <option value="D9">D9 — Navamsa</option>
                <option value="D10">D10 — Dasamsa</option>
                <option value="D12">D12 — Dwadasamsa</option>
                <option value="D16">D16 — Shodasamsa</option>
                <option value="D20">D20 — Vimsamsa</option>
                <option value="D24">D24 — Chaturvimsamsa</option>
                <option value="D27">D27 — Saptavimsamsa</option>
                <option value="D30">D30 — Trimsamsa</option>
                <option value="D40">D40 — Khavedamsa</option>
                <option value="D45">D45 — Akshavedamsa</option>
                <option value="D60">D60 — Shashtiamsa</option>
              </select>
            </label>
            <label className="select-control" id="varga-method-control" hidden>
              <span id="varga-method-label">Drekkana method</span>
              <select id="varga-method">
                <option value="parasara">Parasara</option>
                <option value="somnatha">Somnatha</option>
              </select>
            </label>
          </div>

          <div className="context-control-group" data-context="planetary-motion" aria-label="Planetary motion filters">
            <label className="select-control">
              <span>Filter</span>
              <select id="motion-filter">
                <option value="all">All motion</option>
                <option value="direct">Direct</option>
                <option value="retrograde">Retrograde</option>
              </select>
            </label>
            <label className="select-control">
              <span>Planet</span>
              <select id="motion-planet">
                <option value="all">All planets</option>
                <option value="sun">Sun</option>
                <option value="moon">Moon</option>
                <option value="mars">Mars</option>
                <option value="mercury">Mercury</option>
                <option value="jupiter">Jupiter</option>
                <option value="venus">Venus</option>
                <option value="saturn">Saturn</option>
                <option value="rahu">Rahu</option>
                <option value="ketu">Ketu</option>
              </select>
            </label>
          </div>

          <div className="context-control-group transit-adjustment" data-context="transit-vs-natal" aria-label="Transit and natal chart parameters">
            <div className="adjustment-toggle" role="group" aria-label="Choose chart to adjust">
              <span>Adjust</span>
              <button type="button" data-chart-adjust="natal" aria-pressed="true">Natal</button>
              <button type="button" data-chart-adjust="transit" aria-pressed="false">Transit</button>
            </div>
            <p className="adjustment-caption" id="chart-adjustment-caption" aria-live="polite">Editing inner: Natal chart</p>
          </div>
        </div>
      </section>

      <section className="calculator-panel" id="calculator-panel" hidden>
        <div className="calculator-heading">
          <h1 id="calculator-title">Pindayu</h1>
        </div>

        <div className="ayurdaya-form" id="form-amsayu" data-calc="amsayu" hidden>
          <div className="ayu-inputs">
          <table className="styled-table ayu-table" id="amsayu-table">
            <thead><tr><th>Planet</th><th>Sign</th><th>Degree</th><th>Minute</th><th>House</th><th>Retro/ Exalted (x3)</th><th>Vargottama/ Own (x2)</th></tr></thead>
            <tbody id="amsayu-input-body">
              <tr><td>Ascendant</td><td><select id="amsayu-sign-Lagna" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Lagna" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Lagna" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td></td><td><input type="checkbox" id="amsayu-retro-Lagna" aria-label="Ascendant retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Lagna" aria-label="Ascendant vargottama/own" /></td></tr>
              <tr><td>Sun</td><td><select id="amsayu-sign-Sun" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Sun" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Sun" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Sun" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Sun" aria-label="Sun retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Sun" aria-label="Sun vargottama/own" /></td></tr>
              <tr><td>Moon</td><td><select id="amsayu-sign-Moon" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Moon" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Moon" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Moon" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Moon" aria-label="Moon retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Moon" aria-label="Moon vargottama/own" /></td></tr>
              <tr><td>Mercury</td><td><select id="amsayu-sign-Mercury" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Mercury" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Mercury" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Mercury" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Mercury" aria-label="Mercury retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Mercury" aria-label="Mercury vargottama/own" /></td></tr>
              <tr><td>Venus</td><td><select id="amsayu-sign-Venus" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Venus" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Venus" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Venus" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Venus" aria-label="Venus retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Venus" aria-label="Venus vargottama/own" /></td></tr>
              <tr><td>Mars</td><td><select id="amsayu-sign-Mars" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Mars" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Mars" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Mars" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Mars" aria-label="Mars retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Mars" aria-label="Mars vargottama/own" /></td></tr>
              <tr><td>Jupiter</td><td><select id="amsayu-sign-Jupiter" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Jupiter" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Jupiter" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Jupiter" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Jupiter" aria-label="Jupiter retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Jupiter" aria-label="Jupiter vargottama/own" /></td></tr>
              <tr><td>Saturn</td><td><select id="amsayu-sign-Saturn" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="amsayu-deg-Saturn" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="amsayu-min-Saturn" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="amsayu-house-Saturn" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="checkbox" id="amsayu-retro-Saturn" aria-label="Saturn retrograde/exalted" /></td><td><input type="checkbox" id="amsayu-vargo-Saturn" aria-label="Saturn vargottama/own" /></td></tr>
            </tbody>
          </table>
          <div className="ayu-natures">
            <label>Mercury Nature <select id="amsayu-mercury-nature" className="ayurdaya-form-input"><option value="benefic">Benefic</option><option value="malefic">Malefic</option></select></label>
            <label>Moon Nature <select id="amsayu-moon-nature" className="ayurdaya-form-input"><option value="benefic">Benefic</option><option value="malefic">Malefic</option></select></label>
          </div>
          <div className="ayu-actions">
            <button id="btn-submit-amsayu" className="action-btn" type="button">Calculate Amsayu</button>
            <button id="btn-edit-amsayu" className="action-btn" type="button">Edit Inputs</button>
          </div>
        
          </div>
          <div className="ayu-results" id="amsayu-results-display" hidden>
            <div className="ayu-details" id="amsayu-details"></div>
            <div className="ayu-actions"><button id="btn-edit-amsayu-results" className="action-btn" type="button">Edit Inputs</button></div>
          </div>
        </div>

        <div className="ayurdaya-form" id="form-pindayu" data-calc="pindayu" hidden>
          <div className="ayu-inputs">
          <div className="ayu-card">
            <h4>Ascendant (Lagna)</h4>
            <div className="ayu-asc">
              <label>Sign <select id="pindayu-asc-sign" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></label>
              <label>Degree <input type="number" id="pindayu-asc-deg" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></label>
              <label>Minute <input type="number" id="pindayu-asc-min" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></label>
              <label>House <input type="number" id="pindayu-asc-house" className="ayurdaya-form-input" min="0" max="12" defaultValue="1" readOnly /></label>
              <label className="ayurdaya-checkbox-label"><input type="checkbox" id="pindayu-lagna-aspect" /> Does Lagna have aspects from Benefics?</label>
            </div>
          </div>
          <h4>Planets</h4>
          <table className="styled-table ayu-table" id="pindayu-table">
            <thead><tr><th>Planet</th><th>Sign</th><th>Degree</th><th>Minute</th><th>House</th><th>Shadbala % Strength</th><th>Retrograde</th><th>Combust</th></tr></thead>
            <tbody id="pindayu-input-body">
              <tr><td>Sun</td><td><select id="pindayu-sign-Sun" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Sun" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Sun" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Sun" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Sun" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Sun" aria-label="Sun retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Sun" aria-label="Sun combust" /></td></tr>
              <tr><td>Moon</td><td><select id="pindayu-sign-Moon" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Moon" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Moon" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Moon" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Moon" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Moon" aria-label="Moon retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Moon" aria-label="Moon combust" /></td></tr>
              <tr><td>Mercury</td><td><select id="pindayu-sign-Mercury" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Mercury" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Mercury" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Mercury" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Mercury" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Mercury" aria-label="Mercury retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Mercury" aria-label="Mercury combust" /></td></tr>
              <tr><td>Venus</td><td><select id="pindayu-sign-Venus" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Venus" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Venus" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Venus" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Venus" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Venus" aria-label="Venus retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Venus" aria-label="Venus combust" /></td></tr>
              <tr><td>Mars</td><td><select id="pindayu-sign-Mars" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Mars" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Mars" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Mars" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Mars" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Mars" aria-label="Mars retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Mars" aria-label="Mars combust" /></td></tr>
              <tr><td>Jupiter</td><td><select id="pindayu-sign-Jupiter" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Jupiter" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Jupiter" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Jupiter" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Jupiter" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Jupiter" aria-label="Jupiter retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Jupiter" aria-label="Jupiter combust" /></td></tr>
              <tr><td>Saturn</td><td><select id="pindayu-sign-Saturn" className="ayurdaya-form-input"><option value="1">Aries</option><option value="2">Taurus</option><option value="3">Gemini</option><option value="4">Cancer</option><option value="5">Leo</option><option value="6">Virgo</option><option value="7">Libra</option><option value="8">Scorpio</option><option value="9">Sagittarius</option><option value="10">Capricorn</option><option value="11">Aquarius</option><option value="12">Pisces</option></select></td><td><input type="number" id="pindayu-deg-Saturn" className="ayurdaya-form-input" min="0" max="29" defaultValue="0" /></td><td><input type="number" id="pindayu-min-Saturn" className="ayurdaya-form-input" min="0" max="59" defaultValue="0" /></td><td><select id="pindayu-house-Saturn" className="ayurdaya-form-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><input type="number" id="pindayu-strength-Saturn" className="ayurdaya-form-input" min="0" max="1000" defaultValue="0" step="0.001" /></td><td><input type="checkbox" id="pindayu-retro-Saturn" aria-label="Saturn retrograde" /></td><td><input type="checkbox" id="pindayu-combust-Saturn" aria-label="Saturn combust" /></td></tr>
            </tbody>
          </table>
          <div className="ayu-natures">
            <label>Mercury Nature <select id="pindayu-mercury-nature" className="ayurdaya-form-input"><option value="benefic">Benefic</option><option value="malefic">Malefic</option></select></label>
            <label>Moon Nature <select id="pindayu-moon-nature" className="ayurdaya-form-input"><option value="benefic">Benefic</option><option value="malefic">Malefic</option></select></label>
          </div>
          <div className="ayu-actions">
            <button id="btn-submit-pindayu" className="action-btn" type="button">Calculate Pindayu</button>
            <button id="btn-edit-pindayu" className="action-btn" type="button">Edit Inputs</button>
          </div>
        
          </div>
          <div className="ayu-results" id="pindayu-results-display" hidden>
            <div className="ayu-details" id="pindayu-details"></div>
            <div className="ayu-actions"><button id="btn-edit-pindayu-results" className="action-btn" type="button">Edit Inputs</button></div>
          </div>
        </div>

        <div className="ayurdaya-form" id="form-jaimini" data-calc="jaimini" hidden>
          <div className="ayu-inputs">
          <div className="ayu-card j-times">
            <div className="j-time"><label className="input-group-title">Sunrise</label><div className="j-inline"><input type="text" id="jaimini-sunrise-hh" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="HH" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-sunrise-mm" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="MM" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-sunrise-ss" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="SS" inputMode="numeric" /></div></div>
            <div className="j-time"><label className="input-group-title">Sunset</label><div className="j-inline"><input type="text" id="jaimini-sunset-hh" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="HH" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-sunset-mm" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="MM" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-sunset-ss" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="SS" inputMode="numeric" /></div></div>
            <div className="j-time"><label className="input-group-title">Next Day Sunrise</label><div className="j-inline"><input type="text" id="jaimini-next-sunrise-hh" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="HH" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-next-sunrise-mm" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="MM" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-next-sunrise-ss" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="SS" inputMode="numeric" /></div></div>
            <div className="j-time"><label className="input-group-title">BirthTime</label><div className="j-inline"><input type="text" id="jaimini-birthtime-hh" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="HH" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-birthtime-mm" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="MM" inputMode="numeric" /><span>:</span><input type="text" id="jaimini-birthtime-ss" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="SS" inputMode="numeric" /></div></div>
          </div>
          <div className="ayu-card j-lons">
            <div className="j-inline j-lon"><label>Longitude of Sun (in 360&deg;)</label><input type="text" id="jaimini-sun-lon-deg" className="ayurdaya-form-input j-auto-shift" maxLength="3" placeholder="DDD" inputMode="numeric" /><span>&deg;</span><input type="text" id="jaimini-sun-lon-min" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="MM" inputMode="numeric" /><span>'</span></div>
            <div className="j-inline j-lon"><label>Longitude of Ascendant (in 360&deg;)</label><input type="text" id="jaimini-asc-lon-deg" className="ayurdaya-form-input j-auto-shift" maxLength="3" placeholder="DDD" inputMode="numeric" /><span>&deg;</span><input type="text" id="jaimini-asc-lon-min" className="ayurdaya-form-input j-auto-shift" maxLength="2" placeholder="MM" inputMode="numeric" /><span>'</span></div>
          </div>
          <div className="j-hl-bar">
            <button id="btn-calc-phl" className="action-btn" type="button">Parasara Hora Lagna</button>
            <button id="btn-calc-jhl" className="action-btn" type="button">Jaimini Hora Lagna</button>
          </div>
          <div className="j-hl-out"><div id="phl-display-result"></div><div id="jhl-display-result"></div></div>
          <table className="styled-table jaimini-radio-table">
            <tbody>
<tr><td>Lagna Lord</td><td><label><input type="radio" name="j-lagnalord" defaultValue="Aries" /> Chara</label><label><input type="radio" name="j-lagnalord" defaultValue="Taurus" /> Sthira</label><label><input type="radio" name="j-lagnalord" defaultValue="Gemini" /> Ubhaya</label></td></tr>
<tr><td>8th Lord</td><td><label><input type="radio" name="j-8thlord" defaultValue="Aries" /> Chara</label><label><input type="radio" name="j-8thlord" defaultValue="Taurus" /> Sthira</label><label><input type="radio" name="j-8thlord" defaultValue="Gemini" /> Ubhaya</label></td></tr>
<tr><td>Lagna</td><td><label><input type="radio" name="j-lagna" defaultValue="Aries" /> Chara</label><label><input type="radio" name="j-lagna" defaultValue="Taurus" /> Sthira</label><label><input type="radio" name="j-lagna" defaultValue="Gemini" /> Ubhaya</label></td></tr>
<tr><td>Moon</td><td><label><input type="radio" name="j-moon" defaultValue="Aries" /> Chara</label><label><input type="radio" name="j-moon" defaultValue="Taurus" /> Sthira</label><label><input type="radio" name="j-moon" defaultValue="Gemini" /> Ubhaya</label></td></tr>
<tr><td>Parasara Hora Lagna</td><td><label><input type="radio" name="j-phl" defaultValue="Aries" /> Chara</label><label><input type="radio" name="j-phl" defaultValue="Taurus" /> Sthira</label><label><input type="radio" name="j-phl" defaultValue="Gemini" /> Ubhaya</label></td></tr>
<tr><td>Jaimini Hora Lagna</td><td><label><input type="radio" name="j-jhl" defaultValue="Aries" /> Chara</label><label><input type="radio" name="j-jhl" defaultValue="Taurus" /> Sthira</label><label><input type="radio" name="j-jhl" defaultValue="Gemini" /> Ubhaya</label></td></tr>
            </tbody>
          </table>
          <div className="ayu-actions">
            <button id="btn-submit-jaimini" className="action-btn" type="button">Calculate Jaimini</button>
            <button id="btn-edit-jaimini" className="action-btn" type="button">Edit Inputs</button>
          </div>
        
          </div>
          <div className="ayu-results" id="jaimini-results-display" hidden>
            <div className="ayu-details" id="jaimini-details"></div>
            <div className="ayu-actions"><button id="btn-edit-jaimini-results" className="action-btn" type="button">Edit Inputs</button></div>
          </div>
        </div>

        <p className="calculation-note" id="calculator-status" role="status" aria-live="polite" hidden></p>
      </section>

      {/*
            Kakshaya results table. Backend binding (POST /api/kakshaya, response.kakshaya_table[] rows: planet, col2, col6, col9, col10, col11), one entry per planet:
              kakshaya-{planet}-longitude      -> "19?06'" (col2: deg + minutes within sign)
              kakshaya-{planet}-lord           -> col6: adjusted Kakshaya lord name, e.g. "Sun"
              kakshaya-{planet}-bindus         -> col9: integer bindu score
              kakshaya-{planet}-donors         -> col10: comma-separated donors, e.g. "Su, Mo, Ju"
              kakshaya-{planet}-bindu-by-lord  -> col11: "Yes" / "No"
            Planets: lagna, sun, moon, mars, mercury, jupiter, venus, saturn, rahu, ketu.
            Rahu/Ketu rows (#kakshaya-rahu-*, #kakshaya-ketu-*) follow True/Mean per #node-type (sent as node_mode).
          */}
          <section className="kakshaya-panel" id="kakshaya-panel" aria-label="Kakshaya table" hidden>
          <p className="calculation-note" id="kakshaya-status" role="status" aria-live="polite" hidden></p>
          <div className="kakshaya-card" id="kakshaya-card">
            <div className="kakshaya-scroll">
              <table className="kakshaya-table">
                <thead>
                  <tr>
                    <th scope="col">Planet</th>
                    <th scope="col">Longitude</th>
                    <th scope="col">Kakshaya Lord (Adjusted)</th>
                    <th scope="col">Bindus</th>
                    <th scope="col">Donors</th>
                    <th scope="col">Bindu by Kakshaya Lord</th>
                  </tr>
                </thead>
                <tbody id="kakshaya-body">
                  <tr data-planet="Lagna">
                    <th scope="row">Lagna</th>
                    <td id="kakshaya-lagna-longitude">-</td>
                    <td id="kakshaya-lagna-lord">-</td>
                    <td id="kakshaya-lagna-bindus">-</td>
                    <td id="kakshaya-lagna-donors">-</td>
                    <td id="kakshaya-lagna-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Sun">
                    <th scope="row">Sun</th>
                    <td id="kakshaya-sun-longitude">-</td>
                    <td id="kakshaya-sun-lord">-</td>
                    <td id="kakshaya-sun-bindus">-</td>
                    <td id="kakshaya-sun-donors">-</td>
                    <td id="kakshaya-sun-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Moon">
                    <th scope="row">Moon</th>
                    <td id="kakshaya-moon-longitude">-</td>
                    <td id="kakshaya-moon-lord">-</td>
                    <td id="kakshaya-moon-bindus">-</td>
                    <td id="kakshaya-moon-donors">-</td>
                    <td id="kakshaya-moon-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Mars">
                    <th scope="row">Mars</th>
                    <td id="kakshaya-mars-longitude">-</td>
                    <td id="kakshaya-mars-lord">-</td>
                    <td id="kakshaya-mars-bindus">-</td>
                    <td id="kakshaya-mars-donors">-</td>
                    <td id="kakshaya-mars-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Mercury">
                    <th scope="row">Mercury</th>
                    <td id="kakshaya-mercury-longitude">-</td>
                    <td id="kakshaya-mercury-lord">-</td>
                    <td id="kakshaya-mercury-bindus">-</td>
                    <td id="kakshaya-mercury-donors">-</td>
                    <td id="kakshaya-mercury-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Jupiter">
                    <th scope="row">Jupiter</th>
                    <td id="kakshaya-jupiter-longitude">-</td>
                    <td id="kakshaya-jupiter-lord">-</td>
                    <td id="kakshaya-jupiter-bindus">-</td>
                    <td id="kakshaya-jupiter-donors">-</td>
                    <td id="kakshaya-jupiter-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Venus">
                    <th scope="row">Venus</th>
                    <td id="kakshaya-venus-longitude">-</td>
                    <td id="kakshaya-venus-lord">-</td>
                    <td id="kakshaya-venus-bindus">-</td>
                    <td id="kakshaya-venus-donors">-</td>
                    <td id="kakshaya-venus-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Saturn">
                    <th scope="row">Saturn</th>
                    <td id="kakshaya-saturn-longitude">-</td>
                    <td id="kakshaya-saturn-lord">-</td>
                    <td id="kakshaya-saturn-bindus">-</td>
                    <td id="kakshaya-saturn-donors">-</td>
                    <td id="kakshaya-saturn-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Rahu">
                    <th scope="row">Rahu</th>
                    <td id="kakshaya-rahu-longitude">-</td>
                    <td id="kakshaya-rahu-lord">-</td>
                    <td id="kakshaya-rahu-bindus">-</td>
                    <td id="kakshaya-rahu-donors">-</td>
                    <td id="kakshaya-rahu-bindu-by-lord">-</td>
                  </tr>
                  <tr data-planet="Ketu">
                    <th scope="row">Ketu</th>
                    <td id="kakshaya-ketu-longitude">-</td>
                    <td id="kakshaya-ketu-lord">-</td>
                    <td id="kakshaya-ketu-bindus">-</td>
                    <td id="kakshaya-ketu-donors">-</td>
                    <td id="kakshaya-ketu-bindu-by-lord">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </section>

      {/* Switch the app-shell profile class to select the graphic, ledger, or compressed layout. */}
      <section className="workspace-canvas profile-graphic" id="workspace-canvas" aria-label="Calculation workspace">
        <aside className="kp-table-group kp-left" aria-label="KP cusp tables">
          <section className="mini-ledger">
            <h2>Bhava cusps</h2>
            <div className="mini-ledger-scroll">
              <table><thead><tr><th>Cusp</th><th>Position</th><th>Sub lord</th></tr></thead><tbody></tbody></table>
            </div>
          </section>
          <section className="mini-ledger">
            <h2>Sub divisions</h2>
            <div className="mini-ledger-scroll">
              <table><thead><tr><th>House</th><th>Star lord</th><th>Sub lord</th></tr></thead><tbody></tbody></table>
            </div>
          </section>
        </aside>

        <aside className="coordinate-panel" aria-label="Chart data">
          <div className="panel-heading">
            <div><p className="eyebrow">Calculation workspace</p><h1>Birth chart</h1></div>
            <span className="status-indicator">Ready</span>
          </div>
          <div className="data-summary">
            <div><span>Ascendant</span><strong>Libra <small>14° 28′</small></strong></div>
            <div><span>Moon sign</span><strong>Scorpio <small>03° 12′</small></strong></div>
            <div><span>Nakshatra</span><strong>Anuradha <small>2nd Pada</small></strong></div>
            <div><span>Ayanamsa</span><strong id="summary-ayanamsa">True Lahiri <small>Chitrapaksha</small></strong></div>
          </div>
          <div className="panel-footer">
            <span className="live-dot"></span>
            <span>Coordinates verified</span>
            <span className="coordinates-inline">19.08° N&nbsp; · &nbsp;72.88° E</span>
          </div>
        </aside>

        <div className="chart-panel" data-tab="chart">
          <div className="chart-heading">
              <div><p className="eyebrow">Chart workspace</p><h2 id="chart-format-heading">Natal chart</h2></div>
              <span className="chart-hint">Select chart to expand</span>
          </div>
          <button className="chart-viewport" id="chart-viewport-wrapper" type="button" aria-label="Expand chart to fullscreen">
              <div id="chart-container" className="chart-container" data-format="south">
                <div className="chart-placeholder" role="status">
                  <span className="placeholder-orbit" aria-hidden="true">
                    <svg viewBox="0 0 96 96"><circle cx="48" cy="48" r="36"/><circle cx="48" cy="48" r="22"/><path d="M48 12v72M12 48h72M23 23l50 50m0-50L23 73"/><circle cx="48" cy="48" r="3"/></svg>
                  </span>
                  <span>Chart renderer ready</span>
                  <small>Generated chart graphics appear here</small>
                </div>
              </div>
          </button>
          <p className="calculation-note" id="chart-calculation-note" aria-live="polite" hidden></p>
        </div>

        <aside className="kp-table-group kp-right" aria-label="KP planetary tables">
          <section className="mini-ledger">
              <h2>Planetary significators</h2>
              <div className="mini-ledger-scroll">
                <table><thead><tr><th>Planet</th><th>Star lord</th><th>Sub lord</th></tr></thead><tbody></tbody></table>
              </div>
          </section>
          <section className="mini-ledger">
              <h2>House significators</h2>
              <div className="mini-ledger-scroll">
                <table><thead><tr><th>House</th><th>Planet</th><th>Significator</th></tr></thead><tbody></tbody></table>
              </div>
          </section>
        </aside>
      </section>

      <section className="ledger-panel" data-tab="ledger" aria-label="Planetary positions">
        <div className="ledger-heading"><div><p className="eyebrow">Planetary positions</p><h2>Graha details</h2></div><span>9 bodies</span></div>
        <div className="ledger-scroll">
          <table>
            <thead><tr><th>Planet</th><th>Sign</th><th>Position</th><th>Nakshatra</th><th>House</th><th>Motion</th></tr></thead>
            <tbody id="workspace-ledger-data"></tbody>
          </table>
        </div>
        <p className="calculation-note" id="ledger-calculation-note" aria-live="polite" hidden></p>
      </section>
    </main>

    <footer className="site-footer">
      <p className="footer-copy">© 2026 AstrologersToolkit. All rights reserved.</p>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/philosophy">Philosophy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact Us</a>
        
      </nav>
      <p className="legal-disclaimer">By accessing or using any calculator or tool on this website (“astrologerstoolkit.com”), you agree to be bound by the <a href="/terms">Terms of Use</a>. If you do not agree, please discontinue use of the Site immediately.</p>
    </footer>

    {/* Restore by removing hidden and setting --ad-height to the desired banner height. */}
    <aside className="monetization-strip" aria-label="Sponsored content" hidden>
      <span className="ad-label">SPONSORED</span>
      <span className="ad-placeholder">Reserved space for a relevant partner</span>
    </aside>
  </div>

  {/* The lightbox receives a cloned chart SVG when the chart viewport is activated. */}
  <dialog className="chart-lightbox" id="chart-lightbox" aria-label="Expanded chart">
    <button className="lightbox-close" type="button" aria-label="Close expanded chart">×</button>
    <div className="lightbox-content" id="chart-lightbox-content"></div>
  </dialog>
    </>
  );
}
