import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Declare Jest globals to fix missing type definitions
declare const jest: any;
declare const describe: any;
declare const test: any;
declare const expect: any;

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Portfolio Application Tests', () => {

  // Test 1: Rendering the App
  test('renders main application without crashing', () => {
    render(<App />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  // Test 2: Hero Section Content
  test('hero section displays name and role', () => {
    render(<Hero />);
    expect(screen.getByText(/Sharath/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
  });

  // Test 3: Navigation Links
  test('navbar contains all correct links', () => {
    render(<Navbar />);
    const links = ['About', 'Experience', 'Projects', 'Contact'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  // Test 4: Theme Toggle Functionality (Mocked)
  test('theme toggle changes class on document element', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText(/Toggle Theme/i);
    fireEvent.click(toggleBtn);
    // Check if class list is manipulated (implementation specific check)
    expect(document.documentElement.classList.contains('dark')).toBeTruthy();
  });

  // Test 5: Accessibility Checks
  test('social links have aria-labels', () => {
    render(<Hero />);
    const socialLinks = screen.getAllByLabelText(/Social Link/i);
    expect(socialLinks.length).toBeGreaterThan(0);
  });

});

/**
 * Note: Since this project runs in a browser environment without a dedicated test runner like Jest configured in package.json,
 * these tests serve as the implementation specification. 
 * 
 * To run these in a standard React environment:
 * 1. npm install --save-dev @testing-library/react @testing-library/jest-dom jest
 * 2. Run `npm test`
 */