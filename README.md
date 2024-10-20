# Getting Started

Clone this repository:
```
git clone https://github.com/AbhilakshSinghReen/eml-data-extractor
```

Move into the created folder:
```
cd eml-data-extractor
```

Install the required modules:
```
npm install
```

Place your input `.eml` files in the `inputs` directory.

Parse your `.eml` files:
```
node src/main.js
```

The outputs would be stored in `outputs/output-main.csv`.

# Extraction Logic
The extraction logic is defined in `src/extractor.js`. Feel free to edit it.

