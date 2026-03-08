import { test, expect } from '@playwright/test';
import * as path from 'path';

const { PDFParse } = require('pdf-parse');

test('pdf testing', async () => {

  const pdfPath = path.join(__dirname, 'test-files', 'pdf-exemple.pdf');

  const parser = new PDFParse({ url: pdfPath });

  const result = await parser.getText();

  // Log extracted text and info
  console.log('Text:', result.text);
  console.log('Number of pages:', result.total);
  console.log('Pages:', result.pages.length);

  // Assertions
  expect(result.total).toBeGreaterThan(0);           // total = page count
  expect(result.pages.length).toBeGreaterThan(0);    // pages array has entries
  expect(result.text).toBeTruthy();                  // text was extracted
  expect(result.text).toContain('Le format PDF');    // lowercase 'f' — matches actual PDF content
  expect(result.text).toContain('Adobe Systems');    // another cont ent check
  expect(result.text).toContain('Fichier PDF');      // title check

});
