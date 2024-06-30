# Orders App Exercise

### Prerequisites:

  - node version v21.5.0 (recommended)

1. Clone the repository:

```bash
git clone https://github.com/tchan70/tf-stage-Toby
```

2. Navigate into the project directory:

```bash
cd tf-stage-Toby
```

3. Install dependencies:

```bash 
npm install
```

4. Start the development server:

```bash
npm start
```
  
## Rationale for unit tests

### Home Page Navigation:

  __Unit Test__: Confirm that the homepage button navigates to the /orders page correctly.
  - Rationale: This ensures that the primary navigation from the home page to the orders page works as expected.

### Display Order Count:

  __Unit Test__: Count the number of orders displayed initially without any filters applied.
  - Rationale: Verifies that all orders are shown by default and the initial state of the orders page is correct.

### Document Title Update:

  __Unit Test__: Verify that the number of orders displayed matches the number shown in the document title.
  - Rationale: Ensures that the document title correctly reflects the number of visible orders, providing a good user experience.

### Filter Orders by Status:

  __Unit Test__: Ensure that the number of orders displayed matches the selected filter.
  - Rationale: Checks that the filtering functionality works and the correct subset of orders is shown based on the active filter.

### Switch Between Filters:

  __Unit Test__: Check if the correct filter is active when switching between different order statuses.
  - Rationale: Validates that the user can switch between filters seamlessly and the correct orders are displayed.

### Dismiss Active Filter:

  __Unit Test__: Check that the current filter is displayed at the top of the list, and clicking the "X" removes the selected filter.
  - Rationale: Ensures that the filter dismissal functionality works, allowing the user to reset the filters and view all orders again.
