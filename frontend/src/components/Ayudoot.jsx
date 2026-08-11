import React from 'react';

const Header = () => (
  <header className="bg-surface-container-lowest dark:bg-inverse-surface fixed top-0 w-full shadow-[0px_4px_20px_rgba(15,82,186,0.05)] shadow-sm dark:bg-surface-container-high z-50">
    <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-[1440px] mx-auto z-50">
      <a className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary flex items-center gap-xs" href="#">
        <span className="material-symbols-outlined fill text-[32px] text-primary-container">vital_signs</span>
        HealCore
      </a>
      <nav className="hidden md:flex items-center gap-md">
        <a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#about">About</a>
        <a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#features">Features</a>
        <a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors duration-200" href="#portals">Portals</a>
      </nav>
      <div className="flex items-center gap-sm">
        <button className="hidden md:flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-primary transition-colors active:scale-95">
          Get Started
        </button>
        <button className="md:hidden text-primary p-xs rounded-DEFAULT hover:bg-surface-container-low transition-colors">
          <span className="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-[120px] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div 
        className="bg-cover bg-center w-full h-full opacity-10" 
        data-alt="A modern, high-tech hospital corridor with soft, ethereal blue lighting."
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6gsOQFwKRQPDXZAFjU_1cbMoIodW3OPQTFJECaokRJibwx2drkP0077g3ccEO66kvP7Dic-ky6XkilqGZf_2ENDCQ6X8hE3GoreSI--kgkaRudDCqxDb1jUeYQU4n9jT6c1QnT-NS0QQo1fW3KvqHtxoeq54k0nVwd0LEKQfuTcBnVukPz-mKEHxcbe_zLNrEi_5ggS_qjfU06dQnmVa2_KoYtr_rX63UwQc6iGr8bGY0Ng1rS6j0A')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      <div className="absolute inset-0 bg-grid-pattern" />
    </div>

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      <div className="lg:col-span-7 flex flex-col gap-md">
        <div className="inline-flex items-center gap-xs px-sm py-xs bg-primary-fixed text-on-primary-fixed font-label-md text-label-md rounded-full w-fit">
          <span className="material-symbols-outlined text-[16px] fill">verified_user</span>
          Unified Medical Records
        </div>
        <h1 className="font-display-lg text-display-lg text-on-surface">
          One Patient. <br />
          <span className="text-primary-container">One Record.</span> <br />
          Infinite Care.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Connecting providers, citizens, and authorities through a single, secure medical history database for better health outcomes. Eliminating fragmentation to ensure precision when it matters most.
        </p>
        <div className="flex flex-col sm:flex-row gap-sm pt-sm">
          <a className="flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-primary transition-colors hover:shadow-[0px_4px_20px_rgba(15,82,186,0.2)]" href="#portals">
            Explore Portals
            <span className="material-symbols-outlined ml-xs text-[18px]">arrow_forward</span>
          </a>
          <a className="flex items-center justify-center border border-primary-container text-primary-container font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-surface-container-low transition-colors" href="#problem">
            Learn More
          </a>
        </div>
      </div>

      <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-sm relative">
        <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0px_12px_32px_rgba(0,0,0,0.05)] border border-surface-container flex flex-col gap-sm transform translate-y-4 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined fill">local_hospital</span>
          </div>
          <div>
            <div className="text-caption font-caption text-on-surface-variant">Provider Access</div>
            <div className="text-headline-md font-headline-md text-on-surface mt-xs">0.2s</div>
          </div>
          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-secondary rounded-full" />
          </div>
        </div>

        <div className="bg-primary-container text-on-primary rounded-lg p-md shadow-[0px_12px_32px_rgba(15,82,186,0.2)] flex flex-col gap-sm transform -translate-y-4 hover:-translate-y-6 transition-transform duration-300 z-10">
          <div className="w-10 h-10 rounded-full bg-primary-fixed/20 text-on-primary flex items-center justify-center">
            <span className="material-symbols-outlined fill">ecg</span>
          </div>
          <div>
            <div className="text-caption font-caption text-on-primary/80">Real-time Vitals</div>
            <div className="text-headline-md font-headline-md text-on-primary mt-xs">Active</div>
          </div>
          <div className="mt-auto flex items-end gap-xs h-12">
            <div className="w-full bg-on-primary/30 h-1/3 rounded-t-sm" />
            <div className="w-full bg-on-primary/50 h-2/3 rounded-t-sm" />
            <div className="w-full bg-on-primary h-full rounded-t-sm" />
            <div className="w-full bg-on-primary/70 h-1/2 rounded-t-sm" />
          </div>
        </div>

        <div className="col-span-2 bg-surface-container-lowest rounded-lg p-md shadow-[0px_12px_32px_rgba(0,0,0,0.05)] border border-surface-container flex items-center gap-md">
          <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined fill">admin_panel_settings</span>
          </div>
          <div>
            <div className="text-body-md font-body-md font-medium text-on-surface">Secure Database Synced</div>
            <div className="text-caption font-caption text-on-surface-variant">All endpoints verified and encrypted</div>
          </div>
          <span className="material-symbols-outlined text-secondary ml-auto">check_circle</span>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg" id="problem">
    <div className="bg-surface-container-low rounded-xl p-md md:p-margin-desktop border border-surface-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">The Fragmentation Crisis</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            Scattered medical records across unconnected clinics, hospitals, and specialists create a dangerous gap in patient care. When critical data is siloed, providers are forced to make decisions with incomplete information.
          </p>
          <ul className="flex flex-col gap-sm">
            <li className="flex items-start gap-sm">
              <span className="material-symbols-outlined text-error mt-xs">warning</span>
              <span className="font-body-md text-body-md text-on-surface">Delayed treatment due to record retrieval bottlenecks.</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="material-symbols-outlined text-error mt-xs">medication</span>
              <span className="font-body-md text-body-md text-on-surface">Increased risk of conflicting prescriptions and dangerous interactions.</span>
            </li>
            <li className="flex items-start gap-sm">
              <span className="material-symbols-outlined text-error mt-xs">history</span>
              <span className="font-body-md text-body-md text-on-surface">Loss of crucial historical context during emergency admissions.</span>
            </li>
          </ul>
        </div>
        <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-[0px_4px_20px_rgba(15,82,186,0.05)]">
          <img 
            className="object-cover w-full h-full absolute inset-0" 
            data-alt="A conceptual visualization of scattered medical data."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKHExA5iLGc3fpXIIjwjVvOdbA6GDF9FeXrH72yqThdbmpLOOqGDXZkcw40pZL04jGOqZxLU8INjzjUKcdj03XBgJGeLc8Cf-b8wfF-TZGJn_Yn7vABMWKAhW08l8f76p7PQ5aDu9xsqGgERlpylq03sa2yAJDhjqnpa_KVInTpHmL5FC3ViGmXIYIKRHyHQ0Dv8WbIR0hP-HOeiGc-ci2UFbbFex6M475pf-WpuJQ_5--h_sywF6h7g" 
            alt="Fragmented medical data visualization"
          />
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg" id="features">
    <div className="text-center max-w-3xl mx-auto mb-lg">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">HealCore: The Unified Pulse</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">A singular, immutable architecture designed to bridge the gaps in healthcare data delivery.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0px_4px_20px_rgba(15,82,186,0.05)] border border-surface-container hover:shadow-[0px_12px_32px_rgba(0,0,0,0.05)] transition-shadow">
        <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary-container flex items-center justify-center mb-md">
          <span className="material-symbols-outlined fill text-[24px]">bolt</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Instant Data Retrieval</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Access comprehensive patient histories across the network in milliseconds, ensuring emergency readiness and informed consultations.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0px_4px_20px_rgba(15,82,186,0.05)] border border-surface-container hover:shadow-[0px_12px_32px_rgba(0,0,0,0.05)] transition-shadow">
        <div className="w-12 h-12 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center mb-md">
          <span className="material-symbols-outlined fill text-[24px]">shield_person</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Patient-Owned Records</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Empower citizens with absolute control over their health data through cryptographically secure, user-managed access controls.</p>
      </div>

      <div className="bg-surface-container-lowest rounded-lg p-md shadow-[0px_4px_20px_rgba(15,82,186,0.05)] border border-surface-container hover:shadow-[0px_12px_32px_rgba(0,0,0,0.05)] transition-shadow">
        <div className="w-12 h-12 rounded-full bg-tertiary-fixed text-tertiary flex items-center justify-center mb-md">
          <span className="material-symbols-outlined fill text-[24px]">monitoring</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Real-time Health Analytics</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Aggregate anonymized population data to detect emerging health trends and optimize resource allocation at a systemic level.</p>
      </div>
    </div>
  </section>
);

const Portals = () => (
  <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low/50" id="portals">
    <div className="text-center max-w-3xl mx-auto mb-lg">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Access Portals</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Select your dedicated environment tailored for specific healthcare roles and responsibilities.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0px_4px_20px_rgba(15,82,186,0.05)] border border-surface-container flex flex-col h-full hover:shadow-[0px_12px_32px_rgba(0,0,0,0.1)] transition-all">
        <div className="mb-md">
          <span className="material-symbols-outlined text-[40px] text-primary-container mb-sm">stethoscope</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Healthcare Providers</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage Patient History &amp; Clinical Workflows</p>
        </div>
        <div className="mt-auto flex flex-col gap-sm">
          <button className="w-full flex items-center justify-center bg-primary-container text-on-primary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-primary transition-colors">
            Provider Login
          </button>
          <button className="w-full flex items-center justify-center border border-primary-container text-primary-container font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-surface-container-low transition-colors">
            Request Access
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0px_4px_20px_rgba(15,82,186,0.05)] border border-surface-container flex flex-col h-full hover:shadow-[0px_12px_32px_rgba(0,0,0,0.1)] transition-all lg:-translate-y-4">
        <div className="mb-md">
          <span className="material-symbols-outlined text-[40px] text-secondary mb-sm">family_restroom</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Citizenry</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Your Health in Your Hands. Review records, manage consents.</p>
        </div>
        <div className="mt-auto flex flex-col gap-sm">
          <button className="w-full flex items-center justify-center bg-secondary text-on-secondary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-secondary/90 transition-colors">
            Personal Login
          </button>
          <button className="w-full flex items-center justify-center border border-secondary text-secondary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-surface-container-low transition-colors">
            Register
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0px_4px_20px_rgba(15,82,186,0.05)] border border-surface-container flex flex-col h-full hover:shadow-[0px_12px_32px_rgba(0,0,0,0.1)] transition-all">
        <div className="mb-md">
          <span className="material-symbols-outlined text-[40px] text-tertiary mb-sm">account_balance</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">Central Authorities</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Strategic Health Governance, System Admin &amp; Analytics.</p>
        </div>
        <div className="mt-auto flex flex-col gap-sm">
          <button className="w-full flex items-center justify-center bg-tertiary text-on-tertiary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-tertiary/90 transition-colors">
            Admin Dashboard
          </button>
          <button className="w-full flex items-center justify-center border border-tertiary text-tertiary font-label-md text-label-md h-12 px-gutter rounded-DEFAULT hover:bg-surface-container-low transition-colors">
            Auth Login
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container dark:bg-surface-container-highest w-full mt-xl">
    <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-lg w-full max-w-[1440px] mx-auto gap-md">
      <div className="font-label-md text-label-md font-extrabold text-on-surface dark:text-inverse-on-surface flex items-center gap-xs">
        <span className="material-symbols-outlined fill text-[24px]">vital_signs</span>
        HealCore
      </div>
      <div className="font-caption text-caption text-on-surface-variant dark:text-surface-variant text-center">
        © 2024 HealCore Unified Healthcare Ecosystem. All Rights Reserved.
      </div>
      <nav className="flex gap-md font-caption text-caption text-on-surface-variant dark:text-surface-variant opacity-80 hover:opacity-100">
        <a className="hover:underline transition-all" href="#">Privacy</a>
        <a className="hover:underline transition-all" href="#">Terms</a>
        <a className="hover:underline transition-all" href="#">Contact</a>
      </nav>
    </div>
  </footer>
);

export default function HealCore() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased pt-20">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Portals />
      </main>
      <Footer />
    </div>
  );
}