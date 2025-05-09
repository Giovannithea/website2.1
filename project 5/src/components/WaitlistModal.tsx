import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

function WaitlistModal({ isOpen, onClose, planName }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          { email, plan: planName }
        ]);

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique violation
          setError('This email is already on the waitlist.');
        } else {
          setError('An error occurred. Please try again.');
        }
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting email:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#0A061D] border border-purple-500/20 p-8 rounded-xl max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold mb-4">Join {planName} Waitlist</h3>
            <p className="text-gray-400 mb-6">
              Be among the first to experience Snipir's powerful trading features.
            </p>
            
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-3 mb-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                required
              />
              {error && (
                <p className="text-red-500 mb-4 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6366F1] hover:bg-[#4F46E5] disabled:bg-[#6366F1]/50 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-400">
              You've been added to our waitlist. We'll notify you when Snipir launches.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;