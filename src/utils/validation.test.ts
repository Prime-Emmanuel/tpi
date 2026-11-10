import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, isValidPhone, validateContactForm } from './validation';
import { ContactFormData } from '../types/content';

test('email validation correctly identifies valid and invalid emails', () => {
  assert.equal(isValidEmail('Tpiengineeringsarl@hotmail.com'), true);
  assert.equal(isValidEmail('contact@tpi-engineering.cm'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('no-domain@'), false);
  assert.equal(isValidEmail(''), false);
});

test('phone validation accepts Cameroon phone numbers and international formats', () => {
  assert.equal(isValidPhone('+237 694 11 94 17'), true);
  assert.equal(isValidPhone('+237 678 85 45 06'), true);
  assert.equal(isValidPhone('694119417'), true);
  assert.equal(isValidPhone('abc12345'), false);
  assert.equal(isValidPhone(''), false);
});

test('validateContactForm checks required fields', () => {
  const invalidData: ContactFormData = {
    fullName: '',
    email: 'bad',
    phone: '',
    organization: '',
    sector: '',
    serviceInterest: '',
    location: '',
    message: 'short',
  };

  const result = validateContactForm(invalidData, 'fr');
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.sector);
  assert.ok(result.errors.serviceInterest);
  assert.ok(result.errors.message);

  const validData: ContactFormData = {
    fullName: 'Jean-Paul Nkoumou',
    email: 'jp.nkoumou@societe.cm',
    phone: '+237 694 11 94 17',
    organization: 'Groupe Industriel Camerounais',
    sector: 'private_company',
    serviceInterest: 'electricite_tertiaire',
    location: 'Douala, Cameroun',
    message: 'Demande détude pour installation électrique tertiaire et groupe de secours.',
  };

  const validResult = validateContactForm(validData, 'fr');
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
