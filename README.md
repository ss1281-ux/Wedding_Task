**Setup Instructions**
-- **Install dependencies:** run `npm install` in the project root.
-- **Run locally:** start the dev server with `npm start` and open http://localhost:3000.
-- **Build for production:** use `npm run build`.
-- **Node:** use Node.js v16+ for best compatibility.

**Tech Stack Used**
-- **Framework:** React (Create React App)
-- **Animations:** Framer Motion
-- **Styling:** Tailwind CSS (with some inline styles for precise gradients)
-- **Icons:** Lucide React

**Key Features Implemented**
-- **Question UI:** paged questions with a progress bar and navigation controls.
-- **Answer interactions:** options that show a neutral base and reveal the provided gradient on hover or when selected.
-- **Transitions:** fade animation between questions.
-- **Results:** rolling numeric animation for final score (fast count-up effect).
-- **Mascot & assets:** integrated mascot GIF and `best_of_luck.svg` overlay in the UI.
-- **Responsive basics:** layout uses Tailwind utilities for general responsiveness.

**Assumptions Made**
-- Assets (`cat-mascot.gif`, `best_of_luck.svg`) are placed in `public/` and referenced as `/cat-mascot.gif` and `/best_of_luck.svg`.
-- The `DM Serif Display` font was applied in styles but not bundled — add a Google Fonts import if exact typography is required.
-- The app runs under Create React App conventions (dev server at port 3000).

**Time Spent on Assignment (approx.)**
-- ~4 hours: project scaffold, component implementations, animations, styling iterations, and debugging build errors.


