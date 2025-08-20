import { expect } from 'chai';

describe('Appium DEMO App', () => {

  beforeEach(async () => {
    try {
      // Pastikan aplikasi dimatikan sebelum test dimulai
      await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });
    } catch (err) {
      console.warn('Aplikasi kemungkinan belum berjalan sebelumnya.');
    }

    // Tunggu sebentar sebelum aplikasi dinyalakan ulang
    await browser.pause(1000);

    // Aktifkan kembali aplikasi
    await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis' });
    await browser.pause(1000);
  });

  afterEach(async () => {
    try {
      // Tutup aplikasi setelah setiap test
      await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis' });
    } catch (err) {
      console.warn('Gagal menutup aplikasi setelah test.');
    }
  });

  it('mengisi field username dan password pada dialog', async () => {
    // Selector menu menggunakan accessibilityId
    const appMenu = await $('~App');
    const alertDialogsMenu = await $('~Alert Dialogs');
    const textEntryDialogButton = await $('~Text Entry dialog');

    // Navigasi ke menu yang diinginkan
    await appMenu.waitForDisplayed({ timeout: 5000 });
    await appMenu.click();

    await alertDialogsMenu.waitForDisplayed({ timeout: 5000 });
    await alertDialogsMenu.click();

    await textEntryDialogButton.waitForDisplayed({ timeout: 5000 });
    await textEntryDialogButton.click();

    // Selector untuk input username dan password
    const usernameField = await $('id:io.appium.android.apis:id/username_edit');
    const passwordField = await $('id:io.appium.android.apis:id/password_edit');

    // Data input yang akan diuji
    const testUsername = 'Aman Swasono';
    const testPassword = 'Aman123#';

    // Isi field username dan password
    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue(testUsername);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue(testPassword);

    // Verifikasi input username (password tidak diverifikasi karena teksnya disembunyikan)
    expect(await usernameField.getText()).to.equal(testUsername);
    console.log('Password tidak divalidasi karena input disembunyikan oleh Android.');

    // Simpan screenshot hasil test
    await browser.saveScreenshot('./screenshots/text-entry-success.png');
  });
});
